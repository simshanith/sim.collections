dojo.provide("calitha.collections.abstractlist.Iterator");
dojo.require("calitha.collections.IIterator");
dojo.require("calitha.exception.IndexOutOfBoundsException");
dojo.require("calitha.exception.IllegalStateException");

dojo.declare("calitha.collections.abstractlist.Iterator", calitha.collections.IIterator,
/** @lends calitha.collections.abstractlist.Iterator# */
{

    /**
     * @constructs
     * @extends calitha.collections.IIterator
     */
    constructor: function(/**calitha.collections.AbstractList*/ list)
    {
        this._list = list;
        this._cursor = 0;
        this._lastRet = -1;
        this._expectedModCount = list._modCount;
    }
    ,
    hasNext: function()
    {
        return this._cursor != this._list.size();
    }
    ,
    next: function()
    {
        this._checkForComodification();
        try
        {
            var next = this._list.get(this._cursor);
            this._lastRet = this._cursor++;
            return next;
        }
        catch (e)
        {
            if (calitha.collections.util.isObjectInstanceOf(e, calitha.exception.IndexOutOfBoundsException))
            {
                throw new calitha.exception.NoSuchElementException(Error());
            }
            else
            {
                throw e;
            }
        }
    }
    ,
    remove: function()
    {
        if (this._lastRet === -1)
        {
            throw new calitha.exception.IllegalStateException(Error("Unable to remove in this state"));
        }
        this._checkForComodification();
        this._list.del(this._lastRet);
        if (this._lastRet < this._cursor)
        {
            this._cursor--;
        }
        this._lastRet = -1;
        this._expectedModCount = this._list._modCount;
    }
    ,
    _checkForComodification: function()
    {
        if (this._list._modCount != this._expectedModCount)
        {
            throw new calitha.exception.ConcurrentModificationException(Error());
        }
    }


});

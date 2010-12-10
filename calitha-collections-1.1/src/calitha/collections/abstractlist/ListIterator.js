dojo.provide("calitha.collections.abstractlist.ListIterator");
dojo.require("calitha.collections.IListIterator");
dojo.require("calitha.collections.abstractlist.Iterator");
dojo.require("calitha.exception.IndexOutOfBoundsException");
dojo.require("calitha.exception.NoSuchElementException");
dojo.require("calitha.exception.IllegalStateException");

dojo.declare("calitha.collections.abstractlist.ListIterator", [calitha.collections.IListIterator, calitha.collections.abstractlist.Iterator],
/** @lends calitha.collections.abstractlist.ListIterator# */
{

    /**
     * @constructs
     * @extends calitha.collections.IListIterator
     * @extends calitha.collections.abstractlist.Iterator
     */
    constructor: function(/**calitha.collections.AbstractList*/ list, /**Number*/ index)
    {
        if (index != null)
        {
            this._cursor = index;
        }
    }
    ,
    add: function(/**Object*/ obj)
    {
        this._checkForComodification();
        this._list.add(this._cursor++, obj);
        this._lastRet = -1;
    }
    ,
    hasPrevious: function()
    {
        return this._cursor != 0;
    }
    ,
    nextIndex: function()
    {
        return this._cursor;
    }
    ,
    previous: function()
    {
        this._checkForComodification();
        try
        {
            var i = this._cursor - 1;
            var previous = this._list.get(i);
            this._lastRet = this._cursor = i;
            return previous;
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
    previousIndex: function()
    {
        return this._cursor - 1;
    }
    ,
    set: function(/**Object*/ obj)
    {
        if (this._lastRet === -1)
        {
            throw new calitha.exception.IllegalStateException(Error("Unable to set in this state"));
        }
        this._checkForComodification();
        this._list.set(this._lastRet, obj);
    }
});


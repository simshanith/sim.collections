dojo.provide("calitha.collections.dictionary.DictionaryIterator");
dojo.require("calitha.collections.IIterator");
dojo.require("calitha.collections.ArrayList");
dojo.require("calitha.collections.IIterator");
dojo.require("calitha.exception.IllegalStateException");
dojo.require("calitha.exception.IndexOutOfBoundsException");
dojo.require("calitha.exception.NoSuchElementException");

dojo.declare("calitha.collections.dictionary.DictionaryIterator", calitha.collections.IIterator,
/** @lends calitha.collections.dictionary.DictionaryIterator# */
{

    /**
     * @constructs
     * @extends calitha.collections.IIterator
     */
    constructor: function(/**calitha.collections.Dictionary*/ map)
    {
        this._map = map;
        this._keys = new calitha.collections.ArrayList();
        for (var key in map._items)
        {
            this._keys.add(key);
        }
        this._cursor = 0;
        this._expectedModCount = map._modCount;
    }
    ,
    hasNext: function()
    {
        return this._cursor != this._map.size();
    }
    ,
    remove: function()
    {
        if (this._lastRet === -1)
        {
            throw new calitha.exception.IllegalStateException(Error("Unable to remove in this state"));
        }
        this._checkForComodification();
        var key = this._keys.get(this._lastRet);
        this._map.remove(key);
        this._keys.del(this._lastRet);
        if (this._lastRet < this._cursor)
        {
            this._cursor--;
        }
        this._lastRet = -1;
        this._expectedModCount++;
    }
    ,
    _nextEntry: function()
    {
        this._checkForComodification();
        try
        {
            var key = this._keys.get(this._cursor);
            var next = this._map._getEntry(key);
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
    _checkForComodification: function()
    {
        if (this._modCount != this._map._expectedModCount)
        {
            throw new calitha.collections.linkedlist.ConcurrentModificationException();
        }
    }

});

dojo.provide("calitha.collections.hashmap.HashIterator");
dojo.require("calitha.collections.IIterator");
dojo.require("calitha.exception.ConcurrentModificationException");
dojo.require("calitha.exception.NoSuchElementException");
dojo.require("calitha.exception.IllegalStateException");

dojo.declare("calitha.collections.hashmap.HashIterator", calitha.collections.IIterator,
/** @lends calitha.collections.hashmap.HashIterator# */
{
    /**
     * @constructs
     * @extends calitha.collections.IIterator
     */
    constructor: function(/**calitha.collections.HashMap*/ map)
    {
        this._map = map;
        this._current = null;
        this._next = null;
        this._index = 0;
        this._expectedModCount = map._modCount;

        if (map.isEmpty())
        {
            return;
        }

        // advance to first entry
        while ((this._index < map._table.length) && (this._next == null)) // only == because table consists of undefined
        {
            this._next = map._table[this._index];
            this._index++;
        }
    }
    ,
    hasNext: function()
    {
        return this._next != null;
    }
    ,
    remove: function()
    {
        if (this._current === null)
        {
            throw new calitha.exception.IllegalStateException(Error());
        }
        if (this._map._modCount != this._expectedModCount)
        {
            throw new calitha.exception.ConcurrentModificationException(Error());
        }
        var key = this._current.getKey();
        this._current = null;
        this._map._removeEntryForKey(key);
        this._expectedModCount = this._map._modCount;
    }
    ,
    _nextEntry: function()
    {
        if (this._map._modCount != this._expectedModCount)
        {
            throw new calitha.exception.ConcurrentModificationException(Error());
        }
        var entry = this._next;
        if (entry === null)
        {
            throw new calitha.exception.NoSuchElementException(Error());
        }

        this._next = entry.getNext();
        while ((this._next == null) && (this._index < this._map._table.length))
        {
            this._next = this._map._table[this._index];
            this._index++;
        }

        this._current = entry;
        return entry;
    }

});

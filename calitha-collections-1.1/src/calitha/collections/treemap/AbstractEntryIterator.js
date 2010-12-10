dojo.provide("calitha.collections.treemap.AbstractEntryIterator");
dojo.require("calitha.collections.IIterator");
dojo.require("calitha.exception.NoSuchElementException");
dojo.require("calitha.exception.IllegalStateException");
dojo.require("calitha.exception.ConcurrentModificationException");

dojo.declare("calitha.collections.treemap.AbstractEntryIterator", calitha.collections.IIterator,
/** @lends calitha.collections.treemap.AbstractEntryIterator# */
{
    /**
     * @constructs
     * @extends calitha.collections.IIterator
     */
    constructor: function(/**calitha.collections.TreeMap*/ map, /**calitha.collections.treemap.Entry*/ first)
    {
        this._map = map;
        this._next = first;
        this._lastReturned = null;
        this._expectedModCount = this._map._modCount;
    }
    ,
    hasNext: function()
    {
        return this._next != null;
    }
    ,
    remove: function()
    {
        if (this._lastReturned === null)
        {
            throw new calitha.exception.IllegalStateException(Error("Unable to remove in this state"));
        }
        this._validateModCount();
        // deleted entries are replaced by their successors
        if (this._lastReturned.left != null && this._lastReturned.right != null)
        {
            this._next = this._lastReturned;
        }
        this._map._deleteEntry(this._lastReturned);
        this._expectedModCount = this._map._modCount;
        this._lastReturned = null;
    }
    ,
    _nextEntry: function()
    {
        this._validateNext();
        this._validateModCount();
        var e = this._next;
        this._next = this._map._successor(e);
        this._lastReturned = e;
        return e;
    }
    ,
    _prevEntry: function()
    {
        this._validateNext();
        this._validateModCount();
        var e = this._next;
        this._next = this._map._predecessor(e);
        this._lastReturned = e;
        return e;
    }
    ,
    _validateModCount: function()
    {
        if (this._map._modCount != this._expectedModCount)
        {
            throw new calitha.exception.ConcurrentModificationException(Error());
        }
    }
    ,
    _validateNext: function()
    {
        if (this._next === null)
        {
            throw new calitha.exception.NoSuchElementException(Error());
        }
    }
});


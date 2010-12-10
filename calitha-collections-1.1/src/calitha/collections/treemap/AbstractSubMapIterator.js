dojo.provide("calitha.collections.treemap.AbstractSubMapIterator");
dojo.require("calitha.collections.IIterator");
dojo.require("calitha.exception.NoSuchElementException");
dojo.require("calitha.exception.ConcurrentModificationException");
dojo.require("calitha.exception.IllegalStateException");

dojo.declare("calitha.collections.treemap.AbstractSubMapIterator", calitha.collections.IIterator,
/** @lends calitha.collections.treemap.AbstractSubMapIterator# */
{
    /**
     * @constructs
     * @extends calitha.collections.IIterator
     */
    constructor: function(/**calitha.collections.treemap.NavigableSubMap*/ submap,
                          /**calitha.collections.treemap.Entry*/ first,
                          /**calitha.collections.treemap.Entry*/ fence)
    {
        this._submap = submap;
        this._next = first;
        this._fenceKey = fence == null ? null : fence.key;
        this._expectedModCount = this._submap._map._modCount;
        this._lastReturned = null;
    }
    ,
    hasNext: function()
    {
        return this._next != null && this._next.key != this._fenceKey;
    }
    ,
    _getMap: function()
    {
        return this._submap._map;
    }
    ,
    _getMapModCount: function()
    {
        return this._getMap()._modCount;
    }
    ,
    _nextEntry: function()
    {
        this._validateNext();
        this._validateModCount();
        var e = this._next;
        this._next = this._getMap()._successor(e);
        this._lastReturned = e;
        return e;
    }
    ,
    _prevEntry: function()
    {
        this._validateNext();
        this._validateModCount();
        var e = this._next;
        this._next = this._getMap()._predecessor(e);
        this._lastReturned = e;
        return e;
    }
    ,
    _removeAscending: function()
    {
        this._validateRemoveLastReturned();
        this._validateModCount();
        // deleted entries are replaced by their successors
        if (this._lastReturned.left != null && this._lastReturned.right != null)
        {
            this._next = this._lastReturned;
        }
        this._getMap()._deleteEntry(this._lastReturned);
        this._lastReturned = null;
        this._expectedModCount = this._getMapModCount();
    }
    ,
    _removeDescending: function()
    {
        this._validateRemoveLastReturned();
        this._validateModCount();
        this._getMap()._deleteEntry(this._lastReturned);
        this._lastReturned = null;
        this._expectedModCount = this._getMapModCount();
    }
    ,
    _validateModCount: function()
    {
        if (this._getMapModCount() != this._expectedModCount)
        {
            throw new calitha.exception.ConcurrentModificationException(Error());
        }
    }
    ,
    _validateNext: function()
    {
        if ((this._next === null) || (this._next.key === this._fenceKey))
        {
            throw new calitha.exception.NoSuchElementException(Error());
        }
    }
    ,
    _validateRemoveLastReturned: function()
    {
        if (this._lastReturned === null)
        {
            throw new calitha.exception.IllegalStateException(Error("Cannot remove in this state"));
        }
    }

});

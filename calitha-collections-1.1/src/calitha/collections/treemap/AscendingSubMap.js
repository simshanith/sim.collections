dojo.provide("calitha.collections.treemap.AscendingSubMap");
dojo.require("calitha.collections.treemap.NavigableSubMap");
dojo.require("calitha.exception.IllegalArgumentException");
dojo.require("calitha.collections.treemap.AscendingSubMap");
dojo.require("calitha.collections.treemap.DescendingSubMap");
dojo.require("calitha.collections.treemap.SubMapKeyIterator");
dojo.require("calitha.collections.treemap.DescendingSubMapKeyIterator");
dojo.require("calitha.collections.treemap.AscendingEntrySetView");

dojo.declare("calitha.collections.treemap.AscendingSubMap", calitha.collections.treemap.NavigableSubMap,
/** @lends calitha.collections.treemap.AscendingSubMap# */
{
    /**
     * @constructs
     * @extends calitha.collections.treemap.NavigableSubMap
     */
    constructor: function(/**calitha.collections.TreeMap*/ map,
                          /**Boolean*/ fromStart, /**Object*/ lo, /**Boolean*/ loInclusive,
                          /**Boolean*/ toEnd, /**Object*/ hi, /**Boolean*/ hiInclusive)
    {
    }
    ,
    comparator: function()
    {
        return this._map.comparator();
    }
    ,
    descendingKeyIterator: function()
    {
        return new calitha.collections.treemap.DescendingSubMapKeyIterator(this, this._absHighest(), this._absLowFence());
    }
    ,
    descendingMap: function()
    {
        return new calitha.collections.treemap.DescendingSubMap(this._map,
                                                              this._fromStart, this._lo, this._loInclusive,
                                                              this._toEnd, this._hi, this._hiInclusive);
    }
    ,
    entrySet: function()
    {
        return new calitha.collections.treemap.AscendingEntrySetView(this);
    }
    ,
    headMap: function(/**Object*/ toKey, /**Boolean*/ inclusive)
    {
        if (!this._inRange(toKey, inclusive))
        {
            throw new calitha.exception.IllegalArgumentException(Error("toKey out of range"));
        }
        return new calitha.collections.treemap.AscendingSubMap(this._map,
                                                             this._fromStart, this._lo, this._loInclusive,
                                                             false, toKey, inclusive);
    }
    ,
    keyIterator: function()
    {
        return new calitha.collections.treemap.SubMapKeyIterator(this, this._absLowest(), this._absHighFence());
    }
    ,
    subMap: function(/**Object*/ fromKey, /**Boolean*/ fromInclusive,
                     /**Object*/ toKey, /**Boolean*/ toInclusive)
    {
        if (!this._inRange(fromKey, fromInclusive))
        {
            throw new calitha.exception.IllegalArgumentException(Error("fromKey out of range"));
        }
        if (!this._inRange(toKey, toInclusive))
        {
            throw new calitha.exception.IllegalArgumentException(Error("toKey out of range"));
        }
        return new calitha.collections.treemap.AscendingSubMap(this._map,
                                                             false, fromKey, fromInclusive,
                                                             false, toKey,   toInclusive);
    }
    ,
    tailMap: function(/**Object*/ fromKey, /**Boolean*/ inclusive)
    {
        if (!this._inRange(fromKey, inclusive))
        {
            throw new calitha.exception.IllegalArgumentException(Error("fromKey out of range"));
        }
        return new calitha.collections.treemap.AscendingSubMap(this._map,
                                                             false, fromKey, inclusive,
                                                             this._toEnd, this._hi, this._hiInclusive);
    }
    ,
    _subCeiling: function(/**Object*/ key)
    {
        return this._absCeiling(key);
    }
    ,
    _subFloor: function(/**Object*/ key)
    {
        return this._absFloor(key);
    }
    ,
    _subHigher: function(/**Object*/ key)
    {
        return this._absHigher(key);
    }
    ,
    _subHighest: function()
    {
        return this._absHighest();
    }
    ,
    _subLower: function(/**Object*/key)
    {
        return this._absLower(key);
    }
    ,
    _subLowest: function()
    {
        return this._absLowest();
    }

});

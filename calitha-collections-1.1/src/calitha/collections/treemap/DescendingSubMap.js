dojo.provide("calitha.collections.treemap.DescendingSubMap");
dojo.require("calitha.collections.treemap.NavigableSubMap");
dojo.require("calitha.collections.treemap.AscendingSubMap");
dojo.require("calitha.collections.treemap.DescendingSubMap");
dojo.require("calitha.collections.treemap.DescendingSubMapKeyIterator");
dojo.require("calitha.collections.treemap.SubMapKeyIterator");
dojo.require("calitha.collections.treemap.DescendingEntrySetView");
dojo.require("calitha.exception.IllegalArgumentException");

dojo.declare("calitha.collections.treemap.DescendingSubMap", calitha.collections.treemap.NavigableSubMap,
/** @lends calitha.collections.treemap.DescendingSubMap# */
{
    /**
     * @constructs
     * @extends calitha.collections.treemap.NavigableSubMap
     */
    constructor: function(/**calitha.collections.TreeMap*/ map,
                          /**Boolean*/ fromStart, /**Object*/ lo, /**Boolean*/ loInclusive,
                          /**Boolean*/ toEnd, /**Object*/ hi, /**Boolean*/ hiInclusive)
    {
        this._reverseComparator = calitha.collections.reverseOrder(map._comparator);
    }
    ,
    comparator: function()
    {
        return this._reverseComparator;
    }
    ,
    descendingKeyIterator: function()
    {
        return new calitha.collections.treemap.SubMapKeyIterator(this, this._absLowest(), this._absHighFence());
    }
    ,
    descendingMap: function()
    {
        if (this._descendingMapView === null)
        {
            this._descendingMapView = new calitha.collections.treemap.AscendingSubMap(this._map,
                                                                                    this._fromStart, this._lo, this._loInclusive,
                                                                                    this._toEnd, this._hi, this._hiInclusive);
        }
        return this._descendingMapView;
    }
    ,
    entrySet: function()
    {
        return new calitha.collections.treemap.DescendingEntrySetView(this);
    }
    ,
    headMap: function(/**Object*/ toKey, /**Boolean*/ inclusive)
    {
        if (!this._inRange(toKey, inclusive))
        {
            throw new calitha.exception.IllegalArgumentException(Error("toKey out of range"));
        }
        return new calitha.collections.treemap.DescendingSubMap(this._map,
                                                              false, toKey, inclusive,
                                                              this._toEnd, this._hi, this._hiInclusive);
    }
    ,
    keyIterator: function()
    {
        return new calitha.collections.treemap.DescendingSubMapKeyIterator(this, this._absHighest(), this._absLowFence())
    }
    ,
    subMap: function(/**Object*/ fromKey, /**Boolean*/ fromInclusive, /**Object*/ toKey, /**Boolean*/ toInclusive)
    {
        if (!this._inRange(fromKey, fromInclusive))
        {
            throw new calitha.exception.IllegalArgumentException(Error("fromKey out of range"));
        }
        if (!this._inRange(toKey, toInclusive))
        {
            throw new calitha.exception.IllegalArgumentException(Error("toKey out of range"));
        }
        return new calitha.collections.treemap.DescendingSubMap(this._map,
                                                              false, toKey,   toInclusive,
                                                              false, fromKey, fromInclusive);
    }
    ,
    tailMap: function(/**Object*/ fromKey, /**Boolean*/ inclusive)
    {
        if (!this._inRange(fromKey, inclusive))
        {
            throw new calitha.exception.IllegalArgumentException(Error("fromKey out of range"));
        }
        return new calitha.collections.treemap.DescendingSubMap(this._map,
                                                              this._fromStart, this._lo, this._loInclusive,
                                                              false, fromKey, inclusive);
    }
    ,
    _subCeiling: function(/**Object*/ key)
    {
        return this._absFloor(key);
    }
    ,
    _subFloor: function(/**Object*/ key)
    {
        return this._absCeiling(key);
    }
    ,
    _subHigher: function(/**Object*/ key)
    {
        return this._absLower(key);
    }
    ,
    _subHighest: function()
    {
        return this._absLowest();
    }
    ,
    _subLower: function(/**Object*/ key)
    {
        return this._absHigher(key);
    }
    ,
    _subLowest: function()
    {
        return this._absHighest();
    }

});

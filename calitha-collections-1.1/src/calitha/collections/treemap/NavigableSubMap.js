dojo.provide("calitha.collections.treemap.NavigableSubMap");
dojo.require("calitha.collections.INavigableMap");
dojo.require("calitha.collections.AbstractMap");
dojo.require("calitha.collections.treemap.KeySet");
dojo.require("calitha.collections.imap.ImmutableEntry");
dojo.require("calitha.exception.IllegalArgumentException");
dojo.require("calitha.exception.NoSuchElementException");
dojo.require("calitha.exception.VirtualFunctionException");

dojo.declare("calitha.collections.treemap.NavigableSubMap", [calitha.collections.INavigableMap, calitha.collections.AbstractMap],
/** @lends calitha.collections.treemap.NavigableSubMap# */
{
    /**
     * @constructs
     * @extends calitha.collections.INavigableMap
     * @extends calitha.collections.AbstractMap
     */
    constructor: function(/**calitha.collections.TreeMap*/ map,
                          /**Boolean*/ fromStart, /**Object*/ lo, /**Boolean*/ loInclusive,
                          /**Object*/ toEnd, /**Object*/ hi, /**Boolean*/ hiInclusive)
    {
        if (!fromStart && !toEnd)
        {
            if (map._compare(lo, hi) > 0)
            {
                throw new calitha.exception.IllegalArgumentException(Error("fromKey > toKey"));
            }
        }
        this._map = map;
        this._fromStart = fromStart;
        this._lo = lo;
        this._loInclusive = loInclusive;
        this._toEnd = toEnd;
        this._hi = hi;
        this._hiInclusive = hiInclusive;

        this._descendingMapView = null;
        this._entrySetView = null;
        this._navigableKeySetView = null;
    }
    ,
    ceilingEntry: function(/**Object*/ key)
    {
        return this._exportEntry(this._subCeiling(key));
    }
    ,
    ceilingKey: function(/**Object*/ key)
    {
        return this._keyOrNull(this._subCeiling(key));
    }
    ,
    containsKey: function(/**Object*/ key)
    {
        return this._inRange(key) && this._map.containsKey(key);
    }
    ,
    descendingKeySet: function()
    {
        return this.descendingMap().navigableKeySet();
    }
    ,
    firstEntry: function()
    {
        return this._exportEntry(this._subLowest());
    }
    ,
    firstKey: function()
    {
        return this._key(this._subLowest());
    }
    ,
    floorEntry: function(/**Object*/ key)
    {
        return this._exportEntry(this._subFloor(key));
    }
    ,
    floorKey: function(/**Object*/ key)
    {
        return this._keyOrNull(this._subFloor(key));
    }
    ,
    get: function(/**Object*/ key)
    {
        return !this._inRange(key)? null :  this._map.get(key);
    }
    ,
    higherEntry: function(/**Object*/ key)
    {
        return this._exportEntry(this._subHigher(key));
    }
    ,
    higherKey: function(/**Object*/ key)
    {
        return this._keyOrNull(this._subHigher(key));
    }
    ,
    isEmpty: function()
    {
        return (this._fromStart && this._toEnd) ? this._map.isEmpty() : this.entrySet().isEmpty();
    }
    ,
    keySet: function()
    {
        return this.navigableKeySet();
    }
    ,
    lastEntry: function()
    {
        return this._exportEntry(this._subHighest());
    }
    ,
    lastKey: function()
    {
        return this._key(this._subHighest());
    }
    ,
    lowerEntry: function(/**Object*/ key)
    {
        return this._exportEntry(this._subLower(key));
    }
    ,
    lowerKey: function(/**Object*/ key)
    {
        return this._keyOrNull(this._subLower(key));
    }
    ,
    navigableKeySet: function()
    {
        if (this._navigableKeySetView === null)
        {
            this._navigableKeySetView = new calitha.collections.treemap.KeySet(this);
        }
        return this._navigableKeySetView;
    }
    ,
    pollFirstEntry: function()
    {
        var e = this._subLowest();
        var result = this._exportEntry(e);
        if (e != null)
        {
            this._map._deleteEntry(e);
        }
        return result;
    }
    ,
    pollLastEntry: function()
    {
        var e = this._subHighest();
        var result = this._exportEntry(e);
        if (e != null)
        {
            this._map._deleteEntry(e);
        }
        return result;
    }
    ,
    put: function(/**Object*/ key, /**Object*/ value)
    {
        if (!this._inRange(key))
        {
            throw new calitha.exception.IllegalArgumentException(Error("key out of range"));
        }
        return this._map.put(key, value);
    }
    ,
    remove: function(/**Object*/ key)
    {
        return !this._inRange(key)? null  : this._map.remove(key);
    }
    ,
    size: function()
    {
        return (this._fromStart && this._toEnd) ? this._map.size() : this.entrySet().size();
    }
    ,
    _absCeiling: function(/**Object*/ key)
    {
        if (this._tooLow(key))
        {
            return this._absLowest();
        }
        var e = this._map._getCeilingEntry(key);
        return (e === null || this._tooHigh(e.key)) ? null : e;
    }
    ,
    _absFloor: function(/**Object*/ key)
    {
        if (this._tooHigh(key))
        {
            return this._absHighest();
        }
        var e = this._map._getFloorEntry(key);
        return (e === null || this._tooLow(e.key)) ? null : e;
    }
    ,
    _absHigher: function(/**Object*/ key)
    {
        if (this._tooLow(key))
        {
            return this._absLowest();
        }
        var e = this._map._getHigherEntry(key);
        return (e === null || this._tooHigh(e.key)) ? null : e;
    }
    ,
    _absHighest: function()
    {
        var e =
            (this._toEnd ?  this._map._getLastEntry() :
             (this._hiInclusive ?  this._map._getFloorEntry(this._hi) :
                             this._map._getLowerEntry(this._hi)));
        return (e === null || this._tooLow(e.key)) ? null : e;
    }
    ,
    _absHighFence: function()
    {
        return (this._toEnd ? null : (this._hiInclusive ?
                                this._map._getHigherEntry(this._hi) :
                                this._map._getCeilingEntry(this._hi)));
    }
    ,
    _absLower: function(/**Object*/ key)
    {
        if (this._tooHigh(key))
        {
            return this._absHighest();
        }
        var e = this._map._getLowerEntry(key);
        return (e === null || this._tooLow(e.key)) ? null : e;
    }
    ,
    _absLowest: function()
    {
        var e =
            (this._fromStart ?  this._map._getFirstEntry() :
             (this._loInclusive ? this._map._getCeilingEntry(this._lo) :
                            this._map._getHigherEntry(this._lo)));
        return (e === null || this._tooHigh(e.key)) ? null : e;
    }
    ,
    _absLowFence: function()
    {
        return (this._fromStart ? null : (this._loInclusive ?
                                    this._map._getLowerEntry(this._lo) :
                                    this._map._getFloorEntry(this._lo)));
    }
    ,
    _exportEntry: function(/**calitha.collections.treemap.Entry*/ e)
    {
        return e === null ? null : new calitha.collections.imap.ImmutableEntry(e);
    }
    ,
    _inClosedRange: function(/**Object*/ key)
    {
        return (this._fromStart || this._map._compare(key, this._lo) >= 0)
            && (this._toEnd || this._map._compare(this._hi, key) >= 0);
    }
    ,
    _inRange: function(/**Object*/ key, /**Boolean*/ inclusive)
    {
        return inclusive ? this._inRange(key) : this._inClosedRange(key);
    }
    ,
    _inRangeInclusive: function(/**Object*/ key)
    {
        return !this._tooLow(key) && !this._tooHigh(key);
    }
    ,
    _key: function(/**calitha.collections.treemap.Entry*/ e)
    {
        if (e === null)
        {
            throw new calitha.exception.NoSuchElementException(Error());
        }
        return e.key;
    }
    ,
    _subCeiling: function(/**Object*/ key) {throw new calitha.exception.VirtualFunctionException(Error())}
    ,
    _subFloor: function(/**Object*/ key) {throw new calitha.exception.VirtualFunctionException(Error())}
    ,
    _subHigher: function(/**Object*/ key) {throw new calitha.exception.VirtualFunctionException(Error())}
    ,
    _subHighest: function() {throw new calitha.exception.VirtualFunctionException(Error())}
    ,
    _subLower: function(/**Object*/ key) {throw new calitha.exception.VirtualFunctionException(Error())}
    ,
    _subLowest: function() {throw new calitha.exception.VirtualFunctionException(Error())}
    ,
    _tooHigh: function(/**Object*/ key)
    {
        if (!this._toEnd)
        {
            var c = this._map._compare(key, this._hi);
            if (c > 0 || (c === 0 && !this._hiInclusive))
            {
                return true;
            }
        }
        return false;
    }
    ,
    _tooLow: function(/**Object*/ key)
    {
        if (!this._fromStart)
        {
            var c = this._map._compare(key, this._lo);
            if (c < 0 || (c === 0 && !this._loInclusive))
            {
                return true;
            }
        }
        return false;
    }

});

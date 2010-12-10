dojo.provide("calitha.collections.treemap.EntrySetView");
dojo.require("calitha.collections.AbstractSet");
dojo.require("calitha.collections.imap.IEntry");
dojo.require("calitha.collections.util");

dojo.declare("calitha.collections.treemap.EntrySetView", calitha.collections.AbstractSet,
/** @lends calitha.collections.treemap.EntrySetView# */
{
    /**
     * @constructs
     * @extends calitha.collections.AbstractSet
     */
    constructor: function(/**calitha.collections.NavigableSubMap*/ submap)
    {
        this._submap = submap;
        this._size = -1;
        this._sizeModCount = 0;
    }
    ,
    contains: function(/**Object*/ o)
    {
        if (!calitha.collections.util.isObjectInstanceOf(o, calitha.collections.imap.IEntry))
        {
            return false;
        }
        //noinspection UnnecessaryLocalVariableJS
        var entry = o;
        var key = entry.getKey();
        if (!this._submap.inRange(key))
        {
            return false;
        }
        var node = this._getMap()._getEntry(key);
        return node != null && calitha.collections.util.equals(node.getValue(), entry.getValue());
    }
    ,
    isEmpty: function()
    {
        var entry = this._absLowest();
        return entry === null || this._tooHigh(entry.key);
    }
    ,
    remove: function(/**Object*/ o)
    {
        if (!calitha.collections.util.isObjectInstanceOf(o, calitha.collections.imap.IEntry))
        {
            return false;
        }
        //noinspection UnnecessaryLocalVariableJS
        var entry = o;
        var key = entry.getKey();
        if (!this._submap.inRange(key))
        {
            return false;
        }
        var node = this._getMap()._getEntry(key);
        if (node!=null && calitha.collections.util.equals(node.getValue(), entry.getValue()))
        {
            this._getMap()._deleteEntry(node);
            return true;
        }
        return false;
    }
    ,
    size: function()
    {
        if (this._submap._fromStart && this._submap._toEnd)
        {
            return this._getMap().size();
        }
        if (this._size === -1 || this._sizeModCount != this._getMapModCount())
        {
            this._sizeModCount = this._getMapModCount();
            this._size = 0;
            var it = this.iterator();
            while (it.hasNext())
            {
                this._size++;
                it.next();
            }
        }
        return this._size;
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

});

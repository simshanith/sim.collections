dojo.provide("calitha.collections.treemap.EntrySet");
dojo.require("calitha.collections.AbstractSet");
dojo.require("calitha.collections.imap.IEntry");
dojo.require("calitha.collections.treemap.EntryIterator");
dojo.require("calitha.collections.util");

dojo.declare("calitha.collections.treemap.EntrySet", calitha.collections.AbstractSet,
/** @lends calitha.collections.treemap.EntrySet# */
{
    /**
     * @constructs
     * @extends calitha.collections.AbstractSet
     */
    constructor: function(/**calitha.collections.TreeMap*/ map)
    {
        this._map = map;
    }
    ,
    clear: function()
    {
        this._map.clear();
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
        var value = entry.getValue();
        var p = this._map._getEntry(entry.getKey());
        return p != null && calitha.collections.util.equals(p.getValue(), value);
    }
    ,
    iterator: function()
    {
        return new calitha.collections.treemap.EntryIterator(this._map, this._map._getFirstEntry());
    }
    ,
    remove: function(/**Object*/o)
    {
        if (!calitha.collections.util.isObjectInstanceOf(o, calitha.collections.imap.IEntry))
        {
            return false;
        }
        //noinspection UnnecessaryLocalVariableJS
        var entry = o;
        var value = entry.getValue();
        var p = this._map._getEntry(entry.getKey());
        if (p != null && calitha.collections.util.equals(p.getValue(), value))
        {
            this._map._deleteEntry(p);
            return true;
        }
        return false;
    }
    ,
    size: function()
    {
        return this._map.size();
    }

});

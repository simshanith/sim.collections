dojo.provide("calitha.collections.treemap.Values");
dojo.require("calitha.collections.AbstractCollection");
dojo.require("calitha.collections.util");
dojo.require("calitha.collections.treemap.ValueIterator");

dojo.declare("calitha.collections.treemap.Values", calitha.collections.AbstractCollection,
/** @lends calitha.collections.treemap.Values# */
{
    /**
     * @constructs
     * @extends calitha.collections.AbstractCollection
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
    contains: function(/**Object*/ obj)
    {
        return this._map.containsValue(obj);
    }
    ,
    iterator: function()
    {
        return new calitha.collections.treemap.ValueIterator(this._map, this._map._getFirstEntry());
    }
    ,
    remove: function(/**Object*/ obj)
    {
        var entry = this._map._getFirstEntry();
        while (entry != null)
        {
            if (calitha.collections.util.equals(entry.getValue(), obj))
            {
                this._map._deleteEntry(entry);
                return true;
            }
            entry = this._map._successor(entry);
        }
        return false;
    }
    ,
    size: function()
    {
        return this._map.size();
    }

});

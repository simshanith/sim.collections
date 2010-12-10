dojo.provide("calitha.collections.hashmap.Values");
dojo.require("calitha.collections.AbstractCollection");

dojo.declare("calitha.collections.hashmap.Values", calitha.collections.AbstractCollection,
/** @lends calitha.collections.hashmap.Values# */
{
    /**
     * @constructs
     * @extends calitha.collections.AbstractCollection
     */
    constructor: function(/**calitha.collections.HashMap*/ map)
    {
        this._map = map;
    }
    ,
    iterator: function()
    {
        return this._map._newValueIterator();
    }
    ,
    size: function()
    {
        return this._map._size;
    }
    ,
    contains: function(/**Object*/ o)
    {
        return this._map.containsValue(o);
    }
    ,
    clear: function()
    {
        return this._map.clear();
    }
});

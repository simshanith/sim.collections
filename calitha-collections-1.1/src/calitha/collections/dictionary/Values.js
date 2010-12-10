dojo.provide("calitha.collections.dictionary.Values");
dojo.require("calitha.collections.AbstractCollection");

dojo.declare("calitha.collections.dictionary.Values", calitha.collections.AbstractCollection,
/** @lends calitha.collections.dictionary.Values# */
{
    /**
     * @constructs
     * @extends calitha.collections.AbstractCollection
     */
    constructor: function(/**calitha.collections.Dictionary*/ map)
    {
        this._map = map;
    }
    ,
    clear: function()
    {
        return this._map.clear();
    }
    ,
    contains: function(/**Object*/ o)
    {
        return this._map.containsValue(o);
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
});

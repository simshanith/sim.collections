dojo.provide("calitha.collections.hashmap.KeySet");
dojo.require("calitha.collections.AbstractSet");

dojo.declare("calitha.collections.hashmap.KeySet", calitha.collections.AbstractSet,
/** @lends calitha.collections.hashmap.KeySet# */
{
    /**
     * @constructs
     * @extends calitha.collections.AbstractSet
     */
    constructor: function(/**calitha.collections.HashMap*/ map)
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
        return this._map.containsKey(o);
    }
    ,
    iterator: function()
    {
        return this._map._newKeyIterator();
    }
    ,
    remove: function(/**Object*/ o)
    {
        return this._map._removeEntryForKey(o) != null;
    }
    ,
    size: function()
    {
        return this._map._size;
    }
});

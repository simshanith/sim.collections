dojo.provide("calitha.collections.abstractmap.KeySet");
dojo.require("calitha.collections.AbstractSet");
dojo.require("calitha.collections.abstractmap.KeySetIterator");

dojo.declare("calitha.collections.abstractmap.KeySet", calitha.collections.AbstractSet,
/** @lends calitha.collections.abstractmap.KeySet# */
{

    /**
     * @constructs
     * @extends calitha.collections.AbstractSet
     */
    constructor: function(/**calitha.collections.AbstractMap*/ map)
    {
        this._map = map;
    }
    ,
    contains: function(/**Object*/ key)
    {
        return this._map.containsKey(key);
    }
    ,
    iterator: function()
    {
        return new calitha.collections.abstractmap.KeySetIterator(this);
    }
    ,
    size: function()
    {
        return this._map.size();
    }
});

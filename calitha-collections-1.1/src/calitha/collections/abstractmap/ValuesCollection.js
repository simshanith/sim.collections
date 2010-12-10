dojo.provide("calitha.collections.abstractmap.ValuesCollection");
dojo.require("calitha.collections.AbstractCollection");
dojo.require("calitha.collections.abstractmap.ValuesCollectionIterator");

dojo.declare("calitha.collections.abstractmap.ValuesCollection", calitha.collections.AbstractCollection,
/** @lends calitha.collections.abstractmap.ValuesCollection# */
{

    /**
     * @constructs
     * @extends calitha.collections.AbstractCollection
     */
    constructor: function(/**calitha.collections.AbstractMap*/ map)
    {
        this._map = map;
    }
    ,
    contains: function(/**Object*/ value)
    {
        return this._map.containsValue(value);
    }
    ,
    iterator: function()
    {
        return new calitha.collections.abstractmap.ValuesCollectionIterator(this);
    }
    ,
    size: function()
    {
        return this._map.size();
    }

});

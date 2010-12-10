dojo.provide("calitha.collections.hashmap.KeyIterator");
dojo.require("calitha.collections.hashmap.HashIterator");

dojo.declare("calitha.collections.hashmap.KeyIterator", calitha.collections.hashmap.HashIterator,
/** @lends calitha.collections.hashmap.KeyIterator# */
{
    /**
     * @constructs
     * @extends calitha.collections.hashmap.HashIterator
     */
    constructor: function(/**calitha.collections.HashMap*/ map)
    {
    }
    ,
    next: function()
    {
        return this._nextEntry().getKey();
    }
});

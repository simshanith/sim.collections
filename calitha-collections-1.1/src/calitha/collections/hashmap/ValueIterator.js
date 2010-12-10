dojo.provide("calitha.collections.hashmap.ValueIterator");
dojo.require("calitha.collections.hashmap.HashIterator");

dojo.declare("calitha.collections.hashmap.ValueIterator", calitha.collections.hashmap.HashIterator,
/** @lends calitha.collections.hashmap.ValueIterator# */
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
        return this._nextEntry().getValue();
    }
});

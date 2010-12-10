dojo.provide("calitha.collections.hashmap.EntryIterator");
dojo.require("calitha.collections.hashmap.HashIterator");

dojo.declare("calitha.collections.hashmap.EntryIterator", calitha.collections.hashmap.HashIterator,
/** @lends calitha.collections.hashmap.EntryIterator# */
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
        return this._nextEntry();
    }
});

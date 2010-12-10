dojo.provide("calitha.collections.treemap.KeyIterator");
dojo.require("calitha.collections.treemap.AbstractEntryIterator");

dojo.declare("calitha.collections.treemap.KeyIterator", calitha.collections.treemap.AbstractEntryIterator,
/** @lends calitha.collections.treemap.KeyIterator# */
{
    /**
     * @constructs
     * @extends calitha.collections.treemap.AbstractEntryIterator
     */
    constructor: function(/**calitha.collections.TreeMap*/ map, /**calitha.collections.treemap.Entry*/ first)
    {
    }
    ,
    next: function()
    {
        return this._nextEntry().key;
    }
});

dojo.provide("calitha.collections.treemap.EntryIterator");
dojo.require("calitha.collections.treemap.AbstractEntryIterator");

dojo.declare("calitha.collections.treemap.EntryIterator", calitha.collections.treemap.AbstractEntryIterator,
/** @lends calitha.collections.treemap.EntryIterator# */
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
        return this._nextEntry();
    }
});

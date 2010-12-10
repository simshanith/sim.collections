dojo.provide("calitha.collections.treemap.ValueIterator");
dojo.require("calitha.collections.treemap.AbstractEntryIterator");

dojo.declare("calitha.collections.treemap.ValueIterator", calitha.collections.treemap.AbstractEntryIterator,
/** @lends calitha.collections.treemap.ValueIterator# */
{
    /**
     * @constructs
     * @extends calitha.collections.treemap.AbstractEntryIterator
     */
    constructor: function(/**calitha.collections.treemap.NavigableSubMap*/ map,
                          /**calitha.collections.treemap.Entry*/ first)
    {
    }
    ,
    next: function()
    {
        return this._nextEntry().value;
    }
});

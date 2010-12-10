dojo.provide("calitha.collections.treemap.SubMapEntryIterator");
dojo.require("calitha.collections.treemap.AbstractSubMapIterator");

dojo.declare("calitha.collections.treemap.SubMapEntryIterator", calitha.collections.treemap.AbstractSubMapIterator,
/** @lends calitha.collections.treemap.SubMapEntryIterator# */
{
    /**
     * @constructs
     * @extends calitha.collections.treemap.AbstractSubMapIterator
     */
    constructor: function(/**calitha.collections.treemap.NavigableSubMap*/ submap,
                          /**calitha.collections.treemap.Entry*/ first,
                          /**calitha.collections.treemap.Entry*/ fence)
    {
    }
    ,
    next: function()
    {
        return this._nextEntry();
    }
    ,
    remove: function()
    {
        this._removeAscending();
    }
});

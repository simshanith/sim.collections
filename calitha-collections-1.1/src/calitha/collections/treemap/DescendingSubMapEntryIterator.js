dojo.provide("calitha.collections.treemap.DescendingSubMapEntryIterator");
dojo.require("calitha.collections.treemap.AbstractSubMapIterator");

dojo.declare("calitha.collections.treemap.DescendingSubMapEntryIterator", calitha.collections.treemap.AbstractSubMapIterator,
/** @lends calitha.collections.treemap.DescendingSubMapEntryIterator# */
{
    /**
     * @constructs
     * @extends calitha.collections.treemap.AbstractSubMapIterator
     */
    constructor: function(/**calitha.collections.treemap.DescendingSubMap*/ submap,
                          /**calitha.collections.treemap.Entry*/ last,
                          /**calitha.collections.treemap.Entry*/ fence)
    {
    }
    ,
    next: function()
    {
        return this._prevEntry();
    }
    ,
    remove: function()
    {
        this._removeDescending();
    }
});

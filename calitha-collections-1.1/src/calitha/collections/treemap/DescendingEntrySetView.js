dojo.provide("calitha.collections.treemap.DescendingEntrySetView");
dojo.require("calitha.collections.treemap.EntrySetView");
dojo.require("calitha.collections.treemap.DescendingSubMapEntryIterator");

dojo.declare("calitha.collections.treemap.DescendingEntrySetView", calitha.collections.treemap.EntrySetView,
/** @lends calitha.collections.treemap.DescendingEntrySetView# */
{
    /**
     * @constructs
     * @extends calitha.collections.treemap.EntrySetView
     */
    constructor: function(/**calitha.collections.treemap.DescendingSubMap*/ submap)
    {
    }
    ,
    iterator: function()
    {
        return new calitha.collections.treemap.DescendingSubMapEntryIterator(this._submap,
                                                                           this._submap._absHighest(),
                                                                           this._submap._absLowFence());
    }

});

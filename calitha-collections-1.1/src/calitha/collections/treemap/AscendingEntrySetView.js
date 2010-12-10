dojo.provide("calitha.collections.treemap.AscendingEntrySetView");
dojo.require("calitha.collections.treemap.EntrySetView");
dojo.require("calitha.collections.treemap.SubMapEntryIterator");

dojo.declare("calitha.collections.treemap.AscendingEntrySetView", calitha.collections.treemap.EntrySetView,
/** @lends calitha.collections.treemap.AscendingEntrySetView# */
{
    /**
     * @constructs
     * @extends calitha.collections.treemap.EntrySetView
     */
    constructor: function(/**calitha.collections.AscendingSubMap*/ submap)
    {
    }
    ,
    iterator: function()
    {
        return new calitha.collections.treemap.SubMapEntryIterator(this._submap,
                                                                 this._submap._absLowest(),
                                                                 this._submap._absHighFence());
    }

});

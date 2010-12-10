dojo.provide("calitha.collections.treemap.SubMapKeyIterator");
dojo.require("calitha.collections.treemap.AbstractSubMapIterator");

dojo.declare("calitha.collections.treemap.SubMapKeyIterator", calitha.collections.treemap.AbstractSubMapIterator,
/** @lends calitha.collections.treemap.SubMapKeyIterator# */
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
        return this._nextEntry().key;
    }
    ,
    remove: function()
    {
        this._removeAscending();
    }
});

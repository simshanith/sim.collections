dojo.provide("calitha.collections.treemap.DescendingSubMapKeyIterator");
dojo.require("calitha.collections.treemap.AbstractSubMapIterator");

dojo.declare("calitha.collections.treemap.DescendingSubMapKeyIterator", calitha.collections.treemap.AbstractSubMapIterator,
/** @lends calitha.collections.treemap.DescendingSubMapKeyIterator# */
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
        return this._prevEntry().key;
    }
    ,
    remove: function()
    {
        this._removeDescending();
    }
});

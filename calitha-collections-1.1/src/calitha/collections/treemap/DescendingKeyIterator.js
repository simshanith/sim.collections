dojo.provide("calitha.collections.treemap.DescendingKeyIterator");
dojo.require("calitha.collections.treemap.AbstractEntryIterator");

dojo.declare("calitha.collections.treemap.DescendingKeyIterator", calitha.collections.treemap.AbstractEntryIterator,
/** @lends calitha.collections.treemap.DescendingKeyIterator# */
{
    /**
     * @constructs
     * @extends calitha.collections.treemap.AbstractEntryIterator
     */
    constructor: function(/**calitha.collections.treemap.KeySet*/ map, /**calitha.collections.treemap.Entry*/ first)
    {
    }
    ,
    next: function()
    {
        return this._prevEntry().key;
    }
});

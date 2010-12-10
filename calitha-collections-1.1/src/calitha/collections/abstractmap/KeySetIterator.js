dojo.provide("calitha.collections.abstractmap.KeySetIterator");
dojo.require("calitha.collections.IIterator");

dojo.declare("calitha.collections.abstractmap.KeySetIterator", calitha.collections.IIterator,
/** @lends calitha.collections.abstractmap.KeySetIterator# */
{

    /**
     * @constructs
     * @extends calitha.collections.IIterator
     */
    constructor: function(/**calitha.collections.abstractmap.KeySet*/ keys)
    {
        this._it = keys._map.entrySet().iterator();
    }
    ,
    hasNext: function()
    {
        return this._it.hasNext();
    }
    ,
    next: function()
    {
        return this._it.next().getKey();
    }
    ,
    remove: function()
    {
        this._it.remove();
    }
});

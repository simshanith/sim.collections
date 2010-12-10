dojo.provide("calitha.collections.abstractmap.ValuesCollectionIterator");
dojo.require("calitha.collections.IIterator");

dojo.declare("calitha.collections.abstractmap.ValuesCollectionIterator", calitha.collections.IIterator,
/** @lends calitha.collections.abstractmap.ValuesCollectionIterator# */
{

    /**
     * @constructs
     * @extends calitha.collections.IIterator
     */
    constructor: function(/**calitha.collections.abstractmap.ValuesCollection*/ values)
    {
        this._it = values._map.entrySet().iterator();
    }
    ,
    hasNext: function()
    {
        return this._it.hasNext();
    }
    ,
    next: function()
    {
        return this._it.next().getValue();
    }
    ,
    remove: function()
    {
        this._it.remove();
    }
});

dojo.provide("calitha.collections.dictionary.EntrySet");
dojo.require("calitha.collections.AbstractSet");
dojo.require("calitha.collections.util");

dojo.declare("calitha.collections.dictionary.EntrySet", calitha.collections.AbstractSet,
/** @lends calitha.collections.dictionary.EntrySet# */
{

    /**
     * @constructs
     * @extends calitha.collections.AbstractSet
     */
    constructor: function(/**calitha.collections.Dictionary*/ map)
    {
        this._map = map;
    }
    ,
    clear: function()
    {
        this._map.clear();
    }
    ,
    contains: function(/**Object*/ o)
    {
        if (!calitha.collections.util.isObjectInstanceOf(o, calitha.collections.imap.IEntry))
        {
            return false;
        }
        //noinspection UnnecessaryLocalVariableJS
        var entry = o;
        var candidate = this._map._getEntry(entry.getKey());
        return calitha.collections.util.equals(candidate, entry);
    }
    ,
    iterator: function()
    {
        return this._map._newEntryIterator();
    }
    ,
    remove: function(/**Object*/ o)
    {
        return this._removeMapping(o) != null;
    }
    ,
    size: function()
    {
        return this._map._size;
    }

});

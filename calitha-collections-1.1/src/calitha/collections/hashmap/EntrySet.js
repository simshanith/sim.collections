dojo.provide("calitha.collections.hashmap.EntrySet");
dojo.require("calitha.collections.AbstractSet");
dojo.require("calitha.collections.imap.IEntry");

dojo.declare("calitha.collections.hashmap.EntrySet", calitha.collections.AbstractSet,
/** @lends calitha.collections.hashmap.EntrySet# */
{
    /**
     * @constructs
     * @extends calitha.collections.AbstractSet
     */
    constructor: function(/**calitha.collections.HashMap*/ map)
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

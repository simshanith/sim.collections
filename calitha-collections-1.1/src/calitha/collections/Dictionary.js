dojo.provide("calitha.collections.Dictionary");
dojo.require("calitha.collections.AbstractMap");
dojo.require("calitha.collections.util");
dojo.require("calitha.collections.dictionary.Entry");
dojo.require("calitha.collections.dictionary.EntrySet");
dojo.require("calitha.collections.dictionary.KeySet");
dojo.require("calitha.collections.dictionary.Values");
dojo.require("calitha.collections.dictionary.EntryIterator");
dojo.require("calitha.collections.dictionary.KeyIterator");
dojo.require("calitha.collections.dictionary.ValueIterator");

dojo.declare("calitha.collections.Dictionary", calitha.collections.AbstractMap,
/** @lends calitha.collections.Dictionary#*/
{
    /**
     * @constructs
     * @extends calitha.collections.AbstractMap
     * @description This is a map implementation backed by an object hash literal.
     * <p>Only integer numbers and strings
     * are allowed as keys in this map. There is no similar Java Class.
     */
    constructor: function()
    {
        this._items = {};
        this._size = 0;
        this._entrySet = null;
        this._modCount = 0;
    }
    ,
    clear: function()
    {
        this._modCount++;
        this._items = {};
        this._size = 0;
    }
    ,
    containsKey: function(/**Object*/ key)
    {
        return (key in this._items);
    }
    ,
    containsValue: function(/**Object*/ value)
    {
        for (var p in this._items)
        {
            if (calitha.collections.util.equals(value, this._items[p].getValue()))
            {
                return this._items[p] != null;
            }
        }
        return false;
    }
    ,
    entrySet: function()
    {
        if (this._entrySet === null)
        {
            this._entrySet = new calitha.collections.dictionary.EntrySet(this);
        }
        return this._entrySet;
    }
    ,
    get: function(/**Object*/ key)
    {
        var entry = this._getEntry(key);
        return entry === null ? null : entry.getValue();
    }
    ,
    isEmpty: function()
    {
        return this._size === 0;
    }
    ,
    keySet: function()
    {
        if (this._keySet === null)
        {
            this._keySet = new calitha.collections.dictionary.KeySet(this);
        }
        return this._keySet;
    }
    ,
    put: function(/**Object*/ key, /**Object*/ value)
    {
        this._modCount++;
        var oldValue = (key in this._items) ? this._items[key].getValue() : null;
        this._items[key] = new calitha.collections.dictionary.Entry(key, value);
        this._size++;
        return oldValue;
    }
    ,
    putAll: function(/**calitha.collections.IMap*/ map)
    {
        var it = map.entrySet().iterator();
        while (it.hasNext())
        {
            var entry = it.next();
            this.put(entry.getKey(), entry.getValue());
        }
    }
    ,
    remove: function(/**Object*/ key)
    {
        var entry = this._removeEntryForKey(key);
        return entry === null ? null : entry.getValue();
    }
    ,
    size: function()
    {
        return this._size;
    }
    ,
    values: function()
    {
        if (this._values === null)
        {
            this._values = new calitha.collections.dictionary.Values(this);
        }
        return this._values;
    }
    ,
    _getEntry: function(/**Object*/ key)
    {
        if (key in this._items)
        {
            return this._items[key];
        }
        return null;
    }
    ,
    _removeEntryForKey: function(/**Object*/ key)
    {
        this._modCount++;
        if (key in this._items)
        {
            var entry = this._items[key];
            delete this._items[key];
            this._size--;
            return entry;
        }
        return null;
    }
    ,
    _newEntryIterator: function()
    {
        return new calitha.collections.dictionary.EntryIterator(this);
    }
    ,
    _newKeyIterator: function()
    {
        return new calitha.collections.dictionary.KeyIterator(this);
    }
    ,
    _newValueIterator: function()
    {
        return new calitha.collections.dictionary.ValueIterator(this);
    }

});

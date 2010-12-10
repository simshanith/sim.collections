dojo.provide("calitha.collections.hashmap.Entry");
dojo.require("calitha.collections.imap.IEntry");
dojo.require("calitha.collections.util");

dojo.declare("calitha.collections.hashmap.Entry", calitha.collections.imap.IEntry,
/** @lends calitha.collections.hashmap.Entry# */
{
    /**
     * @constructs
     * @extends calitha.collections.imap.IEntry
     */
    constructor: function(/**Number*/ hash, /**Object*/ key, /**Object*/ value, /**Object*/ next)
    {
        this._hash = hash;
        this._key = key;
        this._value = value;
        this._next = next;
    }
    ,
    equals: function(/**Object*/ o)
    {
        if (!calitha.collections.util.isObjectInstanceOf(o, calitha.collections.imap.IEntry))
        {
            return false;
        }
        //noinspection UnnecessaryLocalVariableJS
        var entry = o;
        return (calitha.collections.util.equals(this.getKey(), entry.getKey())) &&
               (calitha.collections.util.equals(this.getValue(), entry.getValue()));
    }
    ,
    getHash: function()
    {
        return this._hash;
    }
    ,
    getKey: function()
    {
        return this._key;
    }
    ,
    getNext: function()
    {
        return this._next;
    }
    ,
    getValue: function()
    {
        return this._value;
    }
    ,
    hashCode: function()
    {
        return (this.getKey() === null ? 0 : this.getKey().hashCode()) ^
               (this.getValue() === null ? 0 : this.getValue().hashCode());
    }
    ,
    recordAccess: function(map)
    {
    }
    ,
    recordRemoval: function(map)
    {
    }
    ,
    setNext: function(next)
    {
        this._next = next;
    }
    ,
    setValue: function(/**Object*/ newValue)
    {
        var oldValue = this._value;
        this._value = newValue;
        return oldValue;
    }
    ,
    toString: function()
    {
        return this.getKey() + "=" + this.getValue();
    }

});

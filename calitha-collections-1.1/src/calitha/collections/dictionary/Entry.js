dojo.provide("calitha.collections.dictionary.Entry");
dojo.require("calitha.collections.imap.IEntry");
dojo.require("calitha.collections.util");

dojo.declare("calitha.collections.dictionary.Entry", calitha.collections.imap.IEntry,
/** @lends calitha.collections.dictionary.Entry# */
{

    /**
     * @constructs
     * @extends calitha.collections.imap.IEntry
     */
    constructor: function(/**Object*/ key, /**Object*/ value)
    {
        this._key = key;
        this._value = value;
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
    getKey: function()
    {
        return this._key;
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

dojo.provide("calitha.collections.imap.ImmutableEntry");
dojo.require("calitha.collections.imap.IEntry");
dojo.require("calitha.collections.util");
dojo.require("calitha.exception.UnsupportedOperationException");

dojo.declare("calitha.collections.imap.ImmutableEntry", calitha.collections.imap.IEntry,
/** @lends calitha.collections.imap.ImmutableEntry# */
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
        if (!calitha.collections.util.isObjectInstanceOf(o, calitha.collections.IMap.IEntry))
        {
            return false;
        }
        //noinspection UnnecessaryLocalVariableJS
        var entry = o;
        return calitha.collections.util.equals(this.getKey(), entry.getKey()) && calitha.collections.util.equals(this.getValue(), entry.getValue());
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
        return calitha.collections.util.hashCode(this._key) ^ calitha.collections.util.hashCode(this._value);
    }
    ,
    setValue: function(/**Object*/ value)
    {
        throw new calitha.exception.UnsupportedOperationException(Error());
    }
    ,
    toString: function()
    {
        return this._key + "=" + this._value;
    }
});

/**
 * @function
 * @returns {calitha.collections.imap.ImmutableEntry}
 */
calitha.collections.imap.ImmutableEntry.newInstance = function(/**calitha.collections.imap.IEntry*/ entry)
{
    return new calitha.collections.imap.ImmutableEntry(entry.getKey(), entry.getValue());
};

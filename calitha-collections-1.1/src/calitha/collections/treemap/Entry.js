dojo.provide("calitha.collections.treemap.Entry");
dojo.require("calitha.collections.imap.IEntry");
dojo.require("calitha.collections.TreeMap");

dojo.declare("calitha.collections.treemap.Entry", calitha.collections.imap.IEntry,
/** @lends calitha.collections.treemap.Entry# */
{
    /**
     * @constructs
     * @extends calitha.collections.imap.IEntry
     */
    constructor: function(/**Object*/ key, /**Object*/ value, /**calitha.collections.treemap.Entry*/ parent)
    {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.color = calitha.collections.TreeMap._BLACK;
        this.left = null;
        this.right = null;
    }
    ,
    getColor: function()
    {
        return this.color;
    }
    ,
    getKey: function()
    {
        return this.key;
    }
    ,
    getLeft: function()
    {
        return this.left;
    }
    ,
    getParent: function()
    {
        return this.parent;
    }
    ,
    getRight: function()
    {
        return this.right;
    }
    ,
    getValue: function()
    {
        return this.value;
    }
    ,
    setColor: function(/**Number*/ color)
    {
        this.color = color;
    }
    ,
    setKey: function(/**Object*/ key)
    {
        this.key = key;
    }
    ,
    setLeft: function(/**calitha.collections.treemap.Entry*/ left)
    {
        this.left = left;
    }
    ,
    setParent: function(/**calitha.collections.treemap.Entry*/ parent)
    {
        this.parent = parent;
    }
    ,
    setRight: function(/**calitha.collections.treemap.Entry*/ right)
    {
        this.right = right;
    }
    ,
    setValue: function(/**Object*/ value)
    {
        var oldValue = this.value;
        this.value = value;
        return oldValue;
    }
});

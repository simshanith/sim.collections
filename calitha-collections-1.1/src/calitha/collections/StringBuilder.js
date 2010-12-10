dojo.provide("calitha.collections.StringBuilder");

dojo.declare("calitha.collections.StringBuilder", null,
{

    constructor: function(str)
    {
        this._buffer = new Array();
        if (str != null)
        {
            this.append(str);
        }
    }
    ,
    append: function(str)
    {
        this._buffer[this._buffer.length] = str;
        return this;
    }
    ,
    appendln: function(str)
    {
        this.append(str);
        this.append("\n");
        return this;
    }
    ,
    prepend: function(str)
    {
        this._buffer.splice(0, 0, str);
        return this;
    }
    ,
    prependln: function(str)
    {
        this._buffer.splice(0, 0, str, "\n");
        return this;
    }
    ,
    toString: function()
    {
        return this._buffer.join("");
    }

});

dojo.provide("calitha.collections.imap.IEntry");
dojo.require("calitha.exception.VirtualFunctionException");

/**
 * @name calitha.collections.imap.IEntry
 * @class Entry interface
 */
dojo.declare("calitha.collections.imap.IEntry", null,
/** @lends calitha.collections.imap.IEntry#*/
{
    /**
     * @function
     * @returns {Boolean}
     */
    equals: function(/**Object*/ o)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Object}
     */
    getKey: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Object}
     */
    getValue: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Number}
     */
    hashCode: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Object}
     */
    setValue: function(/**Object*/ value)  
    {throw new calitha.exception.VirtualFunctionException(Error());}

});

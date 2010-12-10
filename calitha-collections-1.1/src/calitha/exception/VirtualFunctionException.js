dojo.provide("calitha.exception.VirtualFunctionException");
dojo.require("calitha.exception.Exception");

dojo.declare("calitha.exception.VirtualFunctionException", calitha.exception.Exception,
/** @lends calitha.exception.VirtualFunctionException# */
{
    /**
     * @constructs
     * @extends calitha.exception.Exception
     * @param error
     * @description
     */
    constructor: function(/**Error*/ error)
    {
        this.message = "Pure virtual function call";
    }
});

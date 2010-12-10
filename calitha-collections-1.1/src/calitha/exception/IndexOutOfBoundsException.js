dojo.provide("calitha.exception.IndexOutOfBoundsException");
dojo.require("calitha.exception.Exception");

dojo.declare("calitha.exception.IndexOutOfBoundsException", calitha.exception.Exception,
/** @lends calitha.exception.IndexOutOfBoundsException# */
{
    /**
     * @constructs
     * @extends calitha.exception.Exception
     * @param error
     * @description
     */
    constructor: function(/**Error*/ error, /**Number*/ index, /**Number*/ size)
    {
        this.message = "Index: " +
                       index +
                       ", Size: " +
                       size;
    }
});

dojo.provide("calitha.exception.Exception");

/**
 * @name calitha.exception
 * @namespace
 */

dojo.declare("calitha.exception.Exception", Error,
/** @lends calitha.exception.Exception# */
{
    /**
     * @constructs
     * @extends Error
     * @param error
     * @description
     */
    constructor: function(/**Error*/ error)
    {
        for (var p in error)
        {
            this[p] = error[p];
        }
    }
    ,
    /**
     * @function
     * @returns {String}
     */
    toString: function()
    {
        var message = this.declaredClass;
        if (this.message != null)
        {
            message += ": " + this.message;
        }
        if ((this.fileName != null) && (this.lineNumber != null))
        {
            message += " (" + this.fileName + ":" + this.lineNumber + ")"
        }
        if ((this.stack != null) && (console != null))
        {
            console.error(message + "\n" + this.stack);
        }
        return message;
    }

});


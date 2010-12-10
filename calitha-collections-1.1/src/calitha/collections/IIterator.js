dojo.provide("calitha.collections.IIterator");
dojo.require("calitha.exception.VirtualFunctionException");

/**
 * @name calitha.collections.IIterator
 * @class An iterator over a collection.
 * <p>
 * It is based on the
 * <a href="http://java.sun.com/javase/6/docs/api/java/util/Iterator.html">Java Iterator interface</a>.
 */
dojo.declare("calitha.collections.IIterator", null,
/** @lends calitha.collections.IIterator# */
{
    /**
     * @function
     * @returns {Boolean} true if the iterator has more elements.
     * @description Returns true if the iteration has more elements.
     */
    hasNext: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Object} the next element in the iteration. 
     * @description  Returns the next element in the iteration.
     */
    next: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @description Removes from the underlying collection the last element returned by the iterator.
     */
    remove: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
});

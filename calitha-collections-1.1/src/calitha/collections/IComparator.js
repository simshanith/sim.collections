dojo.provide("calitha.collections.IComparator");
dojo.require("calitha.exception.VirtualFunctionException");

/**
 * @name calitha.collections.IComparator
 * @class A comparison function, which imposes a total ordering on some collection of objects.
 * <p>
 * It is based on the
 * <a href="http://java.sun.com/javase/6/docs/api/java/util/Comparator.html">Java Comparator interface</a>.
 */
dojo.declare("calitha.collections.IComparator", null,
/** @lends calitha.collections.IComparator#*/
{
    /**
     * @function
     * @param o1 the first object to be compared.
     * @param o2 the second object to be compared. 
     * @returns {Boolean} a negative integer, zero, or a positive integer as the first argument is less than, equal to, or greater than the second. 
     * @description Compares its two arguments for order.
     */
    compare: function(/**Object*/ o1, /**Object*/ o2)
    {throw new calitha.exception.VirtualFunctionException(Error());}
});

dojo.provide("calitha.collections.IComparable");
dojo.require("calitha.exception.VirtualFunctionException");

/**
 * @name calitha.collections.IComparable
 * @class This interface imposes a total ordering on the objects of each class that implements it.
 * <p>
 * It is based on the
 * <a href="http://java.sun.com/javase/6/docs/api/java/lang/Comparable.html">Java Comparable interface</a>.
 */
dojo.declare("calitha.collections.IComparable", null,
/** @lends calitha.collections.IComparable#*/
{
    /**
     * @function
     * @param o the object to be compared. 
     * @return {Number} a negative integer, zero, or a positive integer as this object is less than, equal to, or greater than the specified object.
     * @description Compares this object with the specified object for order.
     */
    compareTo: function(/**Object*/ o)
    {throw new calitha.exception.VirtualFunctionException(Error());}
});

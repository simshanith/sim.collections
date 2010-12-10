dojo.provide("calitha.collections.ISortedSet");
dojo.require("calitha.collections.ISet");
dojo.require("calitha.exception.VirtualFunctionException");

/**
 * @name calitha.collections.ISortedSet
 * @class A Map that further provides a total ordering on its keys.
 * <p>
 * It is based on the
 * <a href="http://java.sun.com/javase/6/docs/api/java/util/SortedSet.html">Java SortedSet interface</a>.
 * Differences are:
 * <p>
 * <ul>
 * <li>In Java it is the NavigableSet interface that has methods with extra inclusive parameters for subSet and such.
 * Those methods have been put in this ISortedSet class to replace those same methods without the inclusive parameters.
 * This is done because overloading methods with inheritance too would be too confusing. And the methods with inclusive
 * parameters are more clear anyway.
 * </ul>
 * @extends calitha.collections.ISet
 */
dojo.declare("calitha.collections.ISortedSet", calitha.collections.ISet,
/** @lends calitha.collections.ISortedSet# */
{
    /**
     * @function
     * @returns {calitha.collections.IComparator} the comparator used to order the elements in this set,
     * or null if this set uses the natural ordering of its elements
     * @description A Set that further provides a total ordering on its elements.
     */
    comparator: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Object} the first (lowest) element currently in this set 
     * @description Returns the first (lowest) element currently in this set.
     */
    first: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param toElement high endpoint of the returned set
     * @param inclusive true if the high endpoint is to be included in the returned view
     * @returns {calitha.collections.ISortedSet} a view of the portion of this set whose elements are less than
     * (or equal to, if inclusive is true) toElement
     * @description Returns a view of the portion of this set whose elements are less than
     * (or equal to, if inclusive is true) toElement.
     */
    headSet: function(/**Object*/ toElement, /**Boolean*/ inclusive)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Object} the last (highest) element currently in this set
     * @description  Returns the last (highest) element currently in this set.
     */
    last: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param fromElement low endpoint of the returned set
     * @param fromInclusive true if the low endpoint is to be included in the returned view
     * @param toElement high endpoint of the returned set
     * @param toInclusive true if the high endpoint is to be included in the returned view
     * @returns {calitha.collections.ISortedSet} a view of the portion of this set whose elements range from fromElement,
     * inclusive, to toElement, exclusive
     * @description Returns a view of the portion of this set whose elements range from fromElement to toElement.
     */
    subSet: function(/**Object*/ fromElement, /**Boolean*/ fromInclusive, /**Object*/ toElement, /**Boolean*/ toInclusive)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param fromElement low endpoint of the returned set
     * @param inclusive true if the low endpoint is to be included in the returned view
     * @returns {calitha.collections.ISortedSet} a view of the portion of this set whose elements are greater than
     * or equal to fromElement
     * @description Returns a view of the portion of this set whose elements are greater than (or equal to,
     * if inclusive is true) fromElement.
     */
    tailSet: function(/**Object*/ fromElement, /**Boolean*/ inclusive)
    {throw new calitha.exception.VirtualFunctionException(Error());}
});

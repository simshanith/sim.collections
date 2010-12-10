dojo.provide("calitha.collections.INavigableSet");
dojo.require("calitha.collections.ISortedSet");
dojo.require("calitha.exception.VirtualFunctionException");

/**
 * @name calitha.collections.INavigableSet
 * @class A SortedSet extended with navigation methods reporting closest matches for given search targets.
 * <p>
 * It is based on the
 * <a href="http://java.sun.com/javase/6/docs/api/java/util/NavigableSet.html">Java NavigableSet interface</a>.
 * @extends calitha.collections.ISortedSet
 */
dojo.declare("calitha.collections.INavigableSet", calitha.collections.ISortedSet,
/** @lends calitha.collections.INavigableSet# */
{
    /**
     * @function
     * @param e the value to match 
     * @returns {Object} the least element greater than or equal to e, or null if there is no such element
     * @description Returns the least element in this set greater than or equal to the given element,
     * or null if there is no such element.
     */
    ceiling: function(/**Object*/ e)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {calitha.collections.IIterator} an iterator over the elements in this set, in descending order
     * @description Returns an iterator over the elements in this set, in descending order.
     */
    descendingIterator: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {calitha.collections.INavigableSet} a reverse order view of this set
     * @description Returns a reverse order view of the elements contained in this set.
     */
    descendingSet: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param e the value to match 
     * @returns {Object} the greatest element less than or equal to e, or null if there is no such element  
     * @description Returns the greatest element in this set less than or equal to the given element,
     * or null if there is no such element.
     */
    floor: function(/**Object*/ e)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param e the value to match
     * @returns {Object} the least element greater than e, or null if there is no such element 
     * @description Returns the least element in this set strictly greater than the given element, or null if there is no such element.
     */
    higher: function(/**Object*/ e)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {calitha.collections.IIterator} an iterator over the elements in this set, in ascending order
     * @description Returns an iterator over the elements in this set, in ascending order.
     */
    iterator: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param e the value to match 
     * @returns {Object} the greatest element less than e, or null if there is no such element
     * @description Returns the greatest element in this set strictly less than the given element, or null if there is no such element.
     */
    lower: function(/**Object*/ e)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Object} the first element, or null if this set is empty
     * @description Retrieves and removes the first (lowest) element, or returns null if this set is empty.
     */
    pollFirst: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Object} the last element, or null if this set is empty
     * @description Retrieves and removes the last (highest) element, or returns null if this set is empty.
     */
    pollLast: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
});

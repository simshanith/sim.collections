dojo.provide("calitha.collections.ISortedMap");
dojo.require("calitha.collections.IMap");
dojo.require("calitha.exception.VirtualFunctionException");

/**
 * @name calitha.collections.ISortedMap
 * @class A Map that further provides a total ordering on its keys.
 * <p>
 * It is based on the
 * <a href="http://java.sun.com/javase/6/docs/api/java/util/SortedMap.html">Java SortedMap interface</a>.
 * Differences are:
 * <p>
 * <ul>
 * <li>In Java it is the NavigableMap interface that has methods with extra inclusive parameters for subMap and such.
 * Those methods have been put in this ISortedMap class to replace those same methods without the inclusive parameters.
 * This is done because overloading methods with inheritance too would be too confusing. And the methods with inclusive
 * parameters are more clear anyway.
 * </ul>
 * @extends calitha.collections.IMap
 */
dojo.declare("calitha.collections.ISortedMap", calitha.collections.IMap,
/** @lends calitha.collections.ISortedMap# */
{
    /**
     * @function
     * @returns {calitha.collections.IComparator} the comparator used to order the keys in this map,
     * or null if this map uses the natural ordering of its keys
     * @description  Returns the comparator used to order the keys in this map, or null if this map uses the natural ordering of its keys.
     */
    comparator: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Object} the first (lowest) key currently in this map
     * @description Returns the first (lowest) key currently in this map.
     */
    firstKey: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param toKey high endpoint of the keys in the returned map
     * @param inclusive true if the high endpoint is to be included in the returned view 
     * @returns {calitha.collections.ISortedMap} a view of the portion of this map whose keys are less than
     * (or equal to, if inclusive is true) toKey
     * @description Returns a view of the portion of this map whose keys are less than (or equal to, if inclusive is true) toKey.
     */
    headMap: function(/**Object*/ toKey, /**Boolean*/ inclusive)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Object} the last (highest) key currently in this map
     * @description Returns the last (highest) key currently in this map.
     */
    lastKey: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param fromKey low endpoint (inclusive) of the keys in the returned map
     * @param fromInclusive true if the low endpoint is to be included in the returned view
     * @param toKey high endpoint of the keys in the returned map
     * @param toInclusive true if the high endpoint is to be included in the returned view 
     * @returns {calitha.collections.ISortedMap} a view of the portion of this map whose keys range from fromKey to toKey
     * @description Returns a view of the portion of this map whose keys range from fromKey to toKey.
     */
    subMap: function(/**Object*/ fromKey, /**Boolean*/ fromInclusive, /**Object*/ toKey, /**Boolean*/ toInclusive)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param fromKey low endpoint of the keys in the returned map
     * @param inclusive true if the low endpoint is to be included in the returned view
     * @returns {calitha.collections.ISortedMap} a view of the portion of this map whose keys are greater than (or equal to, if inclusive is true) fromKey
     * @description Returns a view of the portion of this map whose keys are greater than (or equal to, if inclusive is true) fromKey.
     */
    tailMap: function(/**Object*/ fromKey, /**Boolean*/ inclusive)
    {throw new calitha.exception.VirtualFunctionException(Error());}
});

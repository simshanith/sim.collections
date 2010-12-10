dojo.provide("calitha.collections.INavigableMap");
dojo.require("calitha.collections.ISortedMap");
dojo.require("calitha.exception.VirtualFunctionException");

/**
 * @name calitha.collections.INavigableMap
 * @class A SortedMap extended with navigation methods returning the closest matches for given search targets.
 * <p>
 * It is based on the
 * <a href="http://java.sun.com/javase/6/docs/api/java/util/NavigableMap.html">Java NavigableMap interface</a>.
 * Differences are:
 * <p>
 * <ul>
 * <li>In Java it is the NavigableMap interface that has methods with extra inclusive parameters for subMap and such.
 * Those methods have been put in this ISortedMap class to replace those same methods without the inclusive parameters.
 * This is done because overloading methods with inheritance too would be too confusing. And the methods with inclusive
 * parameters are more clear anyway.
 * </ul>
 * @extends calitha.collections.ISortedMap
 */
dojo.declare("calitha.collections.INavigableMap", calitha.collections.ISortedMap,
/** @lends calitha.collections.INavigableMap# */
{
    /**
     * @function
     * @param key the key 
     * @returns {calitha.collections.imap.IEntry} an entry with the least key greater than or equal to key, or null if there is no such key 
     * @description Returns a key-value mapping associated with the least key greater than or equal to the given key,
     * or null if there is no such key.
     */
    ceilingEntry: function(/**Object*/ key)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param key the key
     * @returns {calitha.collections.imap.IEntry} the least key greater than or equal to key, or null if there is no such key
     * @description Returns the least key greater than or equal to the given key, or null if there is no such key.
     */
    ceilingKey: function(/**Object*/ key)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {calitha.collections.INavigableSet} a reverse order navigable set view of the keys in this map
     * @description Returns a reverse order NavigableSet view of the keys contained in this map.
     */
    descendingKeySet: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {calitha.collections.INavigableMap} a reverse order view of this map
     * @description Returns a reverse order view of the mappings contained in this map.
     */
    descendingMap: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {calitha.collections.imap.IEntry} an entry with the least key, or null if this map is empty
     * @description Returns a key-value mapping associated with the least key in this map, or null if the map is empty.
     */
    firstEntry: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param key the key 
     * @returns {calitha.collections.imap.IEntry} an entry with the greatest key less than or equal to key, or null if there is no such key
     * @description Returns a key-value mapping associated with the greatest key less than or equal to the given key,
     * or null if there is no such key.
     */
    floorEntry: function(/**Object*/ key)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param key the key
     * @returns {Object} the greatest key less than or equal to key, or null if there is no such key 
     * @description Returns the greatest key less than or equal to the given key, or null if there is no such key.
     */
    floorKey: function(/**Object*/ key)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param key the key 
     * @returns {calitha.collections.imap.IEntry} an entry with the least key greater than key, or null if there is no such key
     * @description Returns a key-value mapping associated with the least key strictly greater than the given key,
     * or null if there is no such key.
     */
    higherEntry: function(/**Object*/ key)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param key the key 
     * @returns {Object} the least key greater than key, or null if there is no such key
     * @description Returns the least key strictly greater than the given key, or null if there is no such key.
     */
    higherKey: function(/**Object*/ key)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {calitha.collections.imap.IEntry} an entry with the greatest key, or null if this map is empty
     * @description Returns a key-value mapping associated with the greatest key in this map, or null if the map is empty.
     */
    lastEntry: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param key the key
     * @returns {calitha.collections.imap.IEntry} an entry with the greatest key less than key, or null if there is no such key 
     * @description Returns a key-value mapping associated with the greatest key strictly less than the given key,
     * or null if there is no such key.
     */
    lowerEntry: function(/**Object*/ key)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param key the key
     * @returns {Object} the greatest key less than key, or null if there is no such key
     * @description Returns the greatest key strictly less than the given key, or null if there is no such key.
     */
    lowerKey: function(/**Object*/ key)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {calitha.collections.INavigableSet} a navigable set view of the keys in this map
     * @description Returns a NavigableSet view of the keys contained in this map.
     */
    navigableKeySet: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {calitha.collections.imap.IEntry} the removed first entry of this map, or null if this map is empty
     * @description Removes and returns a key-value mapping associated with the least key in this map, or null if the map is empty.
     */
    pollFirstEntry: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {calitha.collections.imap.IEntry} the removed last entry of this map, or null if this map is empty
     * @description Removes and returns a key-value mapping associated with the greatest key in this map,
     * or null if the map is empty.
     */
    pollLastEntry: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
});

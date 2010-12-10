dojo.provide("calitha.collections.IMap");
dojo.require("calitha.exception.VirtualFunctionException");

/**
 * @name calitha.collections.IMap
 * @class An object that maps keys to values.
 * <p>
 * It is based on the
 * <a href="http://java.sun.com/javase/6/docs/api/java/util/Map.html">Java Map interface</a>.
 */
dojo.declare("calitha.collections.IMap", null,
/** @lends calitha.collections.IMap# */
{
    /**
     * @function
     * @description Removes all of the mappings from this map.
     */
    clear: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param key key whose presence in this map is to be tested 
     * @returns {Boolean} true if this map contains a mapping for the specified key
     * @description Returns true if this map contains a mapping for the specified key.
     */
    containsKey: function(/**Object*/ key)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param value whose presence in this map is to be tested 
     * @returns {Boolean} true if this map maps one or more keys to the specified value
     * @description Returns true if this map maps one or more keys to the specified value.
     */
    containsValue: function(/**Object*/ value)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {calitha.collections.ICollection} &lt;{@link calitha.collections.imap.IEntry}&gt;
     * a set view of the mappings contained in this map
     * @description Returns a Set view of the mappings contained in this map.
     */
    entrySet: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Boolean} true if the specified object is equal to this map
     * @description Compares the specified object with this map for equality.
     */
    equals: function(/**Object*/ o)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param key the key whose associated value is to be returned 
     * @returns {Object} the value to which the specified key is mapped, or null if this map contains no mapping for the key
     * @description Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.
     */
    get: function(/**Object*/ key)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Number} the hash code value for this map
     * @description Returns the hash code value for this map.
     */
    hashCode: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Boolean} true if this map contains no key-value mappings
     * @description Returns true if this map contains no key-value mappings.
     */
    isEmpty: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {calitha.collections.ICollection} &lt;Object&gt; a set view of the keys contained in this map
     * @description Returns a Set view of the keys contained in this map.
     */
    keySet: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Object} the previous value associated with key, or null if there was no mapping for key.
     * (A null return can also indicate that the map previously associated null with key, if the implementation supports null values.) 
     * @param key key with which the specified value is to be associated
     * @param value value to be associated with the specified key
     * @description Associates the specified value with the specified key in this map.
     */
    put: function(/**Object*/ key, /**Object*/ value)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param m mappings to be stored in this map 
     * @description Copies all of the mappings from the specified map to this map
     */
    putAll: function(/**calitha.collections.IMap*/ m)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param key key whose mapping is to be removed from the map 
     * @returns {Object} the previous value associated with key, or null if there was no mapping for key.
     * @description Removes the mapping for a key from this map if it is present.
     */
    remove: function(/**Object*/ key)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Number} the number of key-value mappings in this map
     * @description Returns the number of key-value mappings in this map.
     */
    size: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {calitha.collections.ICollection} &lt;Object&gt; a collection view of the values contained in this map
     * @description Returns a Collection view of the values contained in this map.
     */
    values: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
});

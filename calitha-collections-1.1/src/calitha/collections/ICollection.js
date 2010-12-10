dojo.provide("calitha.collections.ICollection");
dojo.require("calitha.exception.VirtualFunctionException");

/**
 * @name calitha.collections.ICollection
 * @class The interface for all list and set based collections.
 * <p>
 * It is based on the
 * <a href="http://java.sun.com/javase/6/docs/api/java/util/Collection.html">Java Collection interface</a>.
 * Differences are:
 * <p>
 * <ul>
 * <li>additional {@link calitha.collections.ICollection#forEach} method
 * </ul>
 *
 */
dojo.declare("calitha.collections.ICollection", null,
/** @lends calitha.collections.ICollection#*/
{
    /**
     * @function
     * @param element element whose presence in this collection is to be ensured 
     * @returns {Boolean} true if this collection changed as a result of the call 
     * @description Ensures that this collection contains the specified element.
     */
    add: function(/**Object*/ element)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param collection collection containing elements to be added to this collection 
     * @returns {Boolean} true if this collection changed as a result of the call
     * @description Adds all of the elements in the specified collection to this collection.
     */
    addAll: function(/**calitha.collections.ICollection*/ collection)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @description Removes all of the elements from this collection.
     */
    clear: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param element element whose presence in this collection is to be tested
     * @returns {Boolean} true if this collection contains the specified element 
     * @description Returns true if this collection contains the specified element.
     */
    contains: function(/**Object*/ element)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param collection collection to be checked for containment in this collection 
     * @returns {Boolean} true if this collection contains all of the elements in the specified collection 
     * @description Returns true if this collection contains all of the elements in the specified collection.
     */
    containsAll: function(/**calitha.collections.ICollection*/ collection)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param obj object to be compared for equality with this collection 
     * @returns {Boolean} true if the specified object is equal to this collection
     * @description Compares the specified object with this collection for equality.
     */
    equals: function(/**Object*/ obj)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @param func function to execute
     * @param scope optional scope for the function to run in
     * @function
     * @description Executes a function for each element in this collection.
     */
    forEach: function(/**Function*/ func, /**Object?*/ scope)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Number} the hash code value for this collection
     * @description Returns the hash code value for this collection.
     */
    hashCode: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Boolean} true if this collection contains no elements
     * @description Returns true if this collection contains no elements.
     */
    isEmpty: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {calitha.collections.IIterator} an Iterator over the elements in this collection
     * @description Returns an iterator over the elements in this collection.
     */
    iterator: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param element element to be removed from this collection, if present
     * @returns {Object} true if an element was removed as a result of this call
     * @description Removes a single instance of the specified element from this collection, if it is present.
     */
    remove: function(/**Object*/ element)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param collection collection containing elements to be removed from this collection 
     * @returns {Boolean} true if this collection changed as a result of the call 
     * @description Removes all of this collection's elements that are also contained in the specified collection.
     */
    removeAll: function(/**calitha.collections.ICollection*/ collection)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param collection collection containing elements to be retained in this collection 
     * @returns {Boolean} true if this collection changed as a result of the call
     * @description Retains only the elements in this collection that are contained in the specified collection.
     */
    retainAll: function(/**calitha.collections.ICollection*/ collection)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Number} the number of elements in this collection
     * @description Returns the number of elements in this collection.
     */
    size: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Array} an array containing all of the elements in this collection
     * @description Returns an array containing all of the elements in this collection.
     */
    toArray: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
});

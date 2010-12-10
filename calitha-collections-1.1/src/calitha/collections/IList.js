dojo.provide("calitha.collections.IList");
dojo.require("calitha.collections.ICollection");
dojo.require("calitha.exception.VirtualFunctionException");

/**
 * @name calitha.collections.IList
 * @class An ordered collection (also known as a sequence).
 * <p>
 * It is based on the
 * <a href="http://java.sun.com/javase/6/docs/api/java/util/List.html">Java List interface</a>.
 * Differences are:
 * <p>
 * <ul>
 * <li>The Java remove method using an int index has been changed to {@link calitha.collections.IList#del}
 * <li>The Java add method using an int index has been changed to {@link calitha.collections.IList#insert}
 * <li>The Java addAll method using an int index has been changed to {@link calitha.collections.IList#insertAll}
 * </ul>
 * @extends calitha.collections.ICollection
 */
dojo.declare("calitha.collections.IList", calitha.collections.ICollection,
/** @lends calitha.collections.IList# */
{
    /**
     * @function
     * @param index the index of the element to be removed 
     * @returns {Boolean} the element previously at the specified position 
     * @description Removes the element at the specified position in this list.
     */
    del: function(/**Number*/ index)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param index index of the element to return 
     * @returns {Object} the element at the specified position in this list
     * @description Returns the element at the specified position in this list.
     */
    get: function(/**Number*/ index)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param element element to search for 
     * @returns {Number} the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element
     * @description Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
     */
    indexOf: function(/**Object*/ element)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param index index at which the specified element is to be inserted
     * @param element element to be inserted 
     * @description Inserts the specified element at the specified position in this list.
     */
    insert: function(/**Number*/ index, /**Object*/ element)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param index index at which to insert the first element from the specified collection
     * @param collection collection containing elements to be added to this list 
     * @returns {Boolean} true if this list changed as a result of the call 
     * @description Inserts all of the elements in the specified collection into this list at the specified position.
     */
    insertAll: function(/**Number*/ index, /**calitha.collections.ICollection*/ collection)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param element element to search for 
     * @returns {Number} the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element 
     * @description Returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element.
     */
    lastIndexOf: function(/**Object*/ element)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param index optional index of first element to be returned from the list iterator. Default value is 0.
     * @returns {calitha.collections.IListIterator} a list iterator over the elements in this list (in proper sequence)
     * @description Returns a list iterator over the elements in this list (in proper sequence).
     */
    listIterator: function(/**Number?*/ index)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param index index of the element to replace
     * @param element element to be stored at the specified position 
     * @returns {Object} the element previously at the specified position
     * @description Replaces the element at the specified position in this list with the specified element.
     */
    set: function(/**Number*/ index, /**Object*/ element)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param comparator optional comparator that is a IComparator or a function  
     * @description Sorts the specified list based on the comparator or IComparable elements if there is no comparator
     */
    sort: function(/**(calitha.collections.IComparator|Function)?*/ comparator)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param fromIndex low endpoint (inclusive) of the subList
     * @oaran toIndex high endpoint (exclusive) of the subList 
     * @returns {calitha.collections.IList} a view of the specified range within this list 
     * @description Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive.
     */
    subList: function(/**Number*/ fromIndex, /**Number*/ toIndex)
    {throw new calitha.exception.VirtualFunctionException(Error());}
});

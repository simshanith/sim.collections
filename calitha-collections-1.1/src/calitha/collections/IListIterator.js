dojo.provide("calitha.collections.IListIterator");
dojo.require("calitha.collections.IIterator");
dojo.require("calitha.exception.VirtualFunctionException");

/**
 * @name calitha.collections.IListIterator
 * @class An iterator for lists that allows the programmer to traverse the list in either direction,
 * modify the list during iteration, and obtain the iterator's current position in the list.
 * <p>
 * It is based on the
 * <a href="http://java.sun.com/javase/6/docs/api/java/util/ListIterator.html">Java ListIterator interface</a>.
 * @extends calitha.collections.IIterator
 */
dojo.declare("calitha.collections.IListIterator", calitha.collections.IIterator,
/** @lends calitha.collections.IListIterator# */
{
    /**
     * @function
     * @param obj the element with which to replace the last element returned by next or previous. 
     * @description Inserts the specified element into the list.
     */
    add: function(/**Object*/ obj)
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Boolean} true if the list iterator has more elements when traversing the list in the reverse direction.
     * @description Returns true if this list iterator has more elements when traversing the list in the reverse direction.
     */
    hasPrevious: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Number} the index of the element that would be returned by a subsequent call to next, or list size if list iterator is at end of list.
     * @description Returns the index of the element that would be returned by a subsequent call to next.
     */
    nextIndex: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Object} the previous element in the list. 
     * @description Returns the previous element in the list.
     */
    previous: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @returns {Number} the index of the element that would be returned by a subsequent call to previous, or -1 if list iterator is at beginning of list.
     * @description Returns the index of the element that would be returned by a subsequent call to previous.
     */
    previousIndex: function()
    {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    /**
     * @function
     * @param obj the element with which to replace the last element returned by next or previous.
     * @description Replaces the last element returned by next or previous with the specified element.
     */
    set: function(/**Object*/ obj)
    {throw new calitha.exception.VirtualFunctionException(Error());}
});

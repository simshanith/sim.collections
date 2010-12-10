dojo.provide("calitha.collections.arrays");
dojo.require("calitha.collections.IComparator");
dojo.require("calitha.collections.base.Comparator");
dojo.require("calitha.exception.IllegalArgumentException");

/**
 * @name calitha.collections.arrays
 * @namespace
 * @description The arrays namespace contains a vaiety of convencience methods for arrays.
 */

/**
 * @function
 * @param array array
 * @returns {Array} new array
 * @description Copies an array
 */
calitha.collections.arrays.copy = function(/**Array*/ array)
{
    var result = new Array(array.length);
    calitha.collections.arrays.copyRangeToArray(array, 0, array.length, result, 0);
    return result;
};

/**
 * @function
 * @param array array
 * @param fromIndex from index
 * @param toIndex to index (not inclusive)
 * @param targetIndex target index
 * @description Copies a range of elements in an array to another index
 */
calitha.collections.arrays.copyRange = function(/**Array*/ array, /**Number*/ fromIndex, /**Number*/ toIndex, /**Number*/ targetIndex)
{
    var count = toIndex - fromIndex;
    if (targetIndex < fromIndex)
    {
        for (var i = 0; i < count; i++)
        {
            array[targetIndex + i] = array[fromIndex + i];
        }
    }
    else if (targetIndex > fromIndex)
    {
        for (var j = count - 1; j >= 0; j--)
        {
            array[targetIndex + j] = array[fromIndex + j];
        }
    }
};

/**
 * @function
 * @param source source array
 * @param fromIndex from index
 * @param toIndex to index (not inclusive)
 * @param dest destination array
 * @param targetIndex target index in the destination array
 * @description Copies a range of elements from one array to another
 */
calitha.collections.arrays.copyRangeToArray = function(/**Array*/ source,
                                                     /**Number*/ fromIndex,
                                                     /**Number*/ toIndex,
                                                     /**Array*/ dest,
                                                     /**Number*/ targetIndex)
{
    var count = toIndex - fromIndex;
    for (var i = 0; i < count; i++)
    {
        dest[targetIndex + i] = source[fromIndex + i];
    }
};

/**
 * @function
 * @param source source array
 * @param fromIndex from index
 * @param toIndex to index (not inclusive)
 * @param dest destination array
 * @param targetIndex target index in the destination array
 * @description Inserts a range of elements in another array
 */
calitha.collections.arrays.insertRangeToArray = function(/**Array*/ source,
                                                         /**Number*/ fromIndex,
                                                         /**Number*/ toIndex,
                                                         /**Array*/ dest,
                                                         /**Number*/ targetIndex)
{
    var count = toIndex - fromIndex;
    calitha.collections.arrays.copyRange(dest, targetIndex, targetIndex + count, targetIndex + count);
    calitha.collections.arrays.copyRangeToArray(source, fromIndex, toIndex, dest, targetIndex);
};

/**
 * @function
 * @param array array
 * @param comparator optional comparator
 * @description Sorts an array according to the specified comparator object or function. If no comparator
 * is specified the natural ordering is used, which means that the elements must be IComparable.
 */
calitha.collections.arrays.sort = function(/**Array*/ array, /**(calitha.collections.IComparator|Function)?*/ comparator)
{
    if (comparator == null)
    {
        calitha.collections.arrays._sortWithComparable(array);
    }
    else if (comparator.isInstanceOf(calitha.collections.IComparator))
    {
        calitha.collections.arrays._sortWithComparator(array, comparator);
    }
    else if (comparator.isInstanceOf(Function))
    {
        var cmp = new calitha.collections.base.Comparator(comparator);
        calitha.collections.arrays._sortWithComparator(array, cmp);
    }
    else
    {
        throw new calitha.exception.IllegalArgumentException(Error("Invalid comparator argument"));
    }
};

calitha.collections.arrays._sortWithComparable = function(array)
{
    if (array.length > 0)
    {
        var item = array[0];
        if (!calitha.collections.util.isObjectInstanceOf(item, calitha.collections.IComparable))
        {
            throw new calitha.exception.IllegalArgumentException(Error("Can only sort IComparable objects"));
        }

    }
    array.sort(function(o1, o2)
    {
        return o1.compareTo(o2);
    });
};

calitha.collections.arrays._sortWithComparator = function(array, comparator)
{
    array.sort(function(o1, o2)
    {
        return comparator.compare(o1, o2);
    });
};

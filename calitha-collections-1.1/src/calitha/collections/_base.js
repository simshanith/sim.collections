dojo.provide("calitha.collections._base");
dojo.require("calitha.collections.base.ReverseComparator");
dojo.require("calitha.collections.base.ReverseNaturalComparator");
dojo.require("calitha.collections.base.NumberComparator");
dojo.require("calitha.collections.base.StringComparator");

/**
 * @name calitha
 * @namespace
 */

/**
 * @name calitha.collections
 * @namespace
 * @version 1.1
 * @description The collections namespace consists of static methods that supports the use of the collections framework.
 * The methods operate or return collections or comparators. Probably the most important methods are those
 * that make integer-based numbers and strings compatible as keys in hash-based collections.
 */

calitha.collections._NUMBER_COMPARATOR = null;
calitha.collections._REVERSE_NATURAL_COMPARATOR = null;
calitha.collections._STRING_COMPARATOR = null;
calitha.collections._CASE_INSENSITIVE_STRING_COMPARATOR = null;
calitha.collections._OBJECT_AS_STRING_COMPARATOR = null;
calitha.collections._OBJECT_AS_CASE_INSENSITIVE_STRING_COMPARATOR = null;

/**
 * @function
 * @param cmp comparator optional comparator
 * @returns {calitha.collections.IComparator} comparator with reverse ordering
 * @description Returns a comparator that imposes reverse ordering. If a comparator is used, then the ordering
 * is reversed on that comparator. Otherwise the elements must be IComparable and the natural ordering is reversed.
 */
calitha.collections.reverseOrder = function(/**calitha.collections.IComparator?*/ cmp)
{
    if (cmp == null)
    {
        return calitha.collections.reverseNaturalOrder();
    }
    return calitha.collections.base.ReverseComparator(cmp);
};

/**
 * @function
 * @returns a comparator that imposes the reverse of the natural ordering
 * @description Returns a comparator that imposes the reverse of the natural ordering on a collection of objects that
 * implement the IComparable interface.
 */
calitha.collections.reverseNaturalOrder = function()
{
    if (calitha.collections._REVERSE_NATURAL_COMPARATOR === null)
    {
        calitha.collections._REVERSE_NATURAL_COMPARATOR = new calitha.collections.base.ReverseNaturalComparator();
    }
    return calitha.collections._REVERSE_NATURAL_COMPARATOR;
};

/**
 * @function
 * @param number number to make compatible
 * @description Makes a number with integer value compatible with hash-based collections. This is done by
 * extending the object to include an equals and hashCode value. You can pass the Number.prototype to make all existing
 * and new numbers compatible.
 */
calitha.collections.makeNumberHashCompatible = function(/**Number*/ number)
{
    if (number.equals == null)
    {
        number.equals = function(obj)
        {
            return obj === this;
        };
    }
    if (number.hashCode == null)
    {
        number.hashCode = function()
        {
            return this;
        };
    }
};

/**
 * @function
 * @param str string to make compatible
 * @description Makes a string compativle with hash-based collections. This is done by extending the object to
 * include an equals and hashCode value. You can pass String.prototype to make all existing and new strings compatible.
 */
calitha.collections.makeStringHashCompatible = function(/**String*/ str)
{
    if (str.equals == null)
    {
        str.equals = function(obj)
        {
            return obj === this;
        };
    }
    if (str.hashCode == null)
    {
        str.hashCode = function()
        {
            if (this._hash == null)
            {
                var result = 0;
                for (var i = 0; i < this.length; i++)
                {
                    result = 31 * result + this.charCodeAt(i);
                }
                this._hash = result;
            }
            return this._hash;
        };
    }
};

/**
 * @function
 * @returns {calitha.collections.IComparator} comparator
 * @description returns a comparator to compare numbers. The comparator can be used for tree-based collections.
 */
calitha.collections.numberComparator = function()
{
    if (calitha.collections._NUMBER_COMPARATOR === null)
    {
        calitha.collections._NUMBER_COMPARATOR = new calitha.collections.base.NumberComparator();
    }
    return calitha.collections._NUMBER_COMPARATOR;
};

/**
 * @function
 * @returns {calitha.collections.IComparator} comparator
 * @description returns a comparator to compare string (only objects of type string).
 * The comparator can be used for tree-based collections.
 */
calitha.collections.stringComparator = function()
{
    if (calitha.collections._STRING_COMPARATOR === null)
    {
        calitha.collections._STRING_COMPARATOR = new calitha.collections.base.StringComparator(false, true);
    }
    return calitha.collections._STRING_COMPARATOR;
};

/**
 * @function
 * @returns {calitha.collections.IComparator} comparator
 * @description returns a comparator to compare string in a case insensitive way (only objects of type string).
 * The comparator can be used for tree-based collections.
 */
calitha.collections.caseInsenstiveStringComparator = function()
{
    if (calitha.collections._CASE_INSENSITIVE_STRING_COMPARATOR === null)
    {
        calitha.collections._CASE_INSENSITIVE_STRING_COMPARATOR = new calitha.collections.base.StringComparator(true, true);
    }
    return calitha.collections._CASE_INSENSITIVE_STRING_COMPARATOR;
};

/**
 * @function
 * @returns {calitha.collections.IComparator} comparator
 * @description returns a comparator to compare any object by getting its string representation.
 * The comparator can be used for tree-based collections.
 */
calitha.collections.objectAsStringComparator = function()
{
    if (calitha.collections._OBJECT_AS_STRING_COMPARATOR === null)
    {
        calitha.collections._OBJECT_AS_STRING_COMPARATOR = new calitha.collections.base.StringComparator(false, false);
    }
    return calitha.collections._OBJECT_AS_STRING_COMPARATOR;
};

/**
 * @function
 * @returns {calitha.collections.IComparator} comparator
 * @description returns a comparator to compare case insensitive any object by getting its string representation.
 * The comparator can be used for tree-based collections.
 */
calitha.collections.objectAsCaseInsensitiveStringComparator = function()
{
    if (calitha.collections._OBJECT_AS_CASE_INSENSITIVE_STRING_COMPARATOR === null)
    {
        calitha.collections._OBJECT_AS_CASE_INSENSITIVE_STRING_COMPARATOR = new calitha.collections.base.StringComparator(false, false);
    }
    return calitha.collections._OBJECT_AS_CASE_INSENSITIVE_STRING_COMPARATOR;
};

/**
 * @function
 * @param list list
 * @param comparator optional comparator
 * @description Sorts a list by using the comparator object/function. Or if the comparator is not specified, it uses
 * the natural ordering which means the elements must be IComparable objects.
 */
calitha.collections.sort = function(/**calitha.collections.IList*/ list, /**(calitha.collections.IComparator|Function)?*/ comparator)
{
    var array = list.toArray();
    calitha.collections.arrays.sort(array, comparator);
    var it = list.listIterator();
    for (var index = 0; index < array.length; index++)
    {
        it.next();
        it.set(array[index]);
    }
};

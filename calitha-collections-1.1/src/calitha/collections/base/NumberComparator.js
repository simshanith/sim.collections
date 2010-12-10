dojo.provide("calitha.collections.base.NumberComparator");
dojo.require("calitha.collections.IComparator");
dojo.require("calitha.exception.IllegalArgumentException");

/**
 * @name calitha.collections.base.NumberComparator
 * @class Number comparator
 * @extends calitha.collections.IComparator
 */
dojo.declare("calitha.collections.base.NumberComparator", calitha.collections.IComparator,
/** @lends calitha.collections.NumberComparator#*/
{
    compare: function(/**Object*/ obj1, /**Object*/ obj2)
    {
        if ((typeof obj1 != "number") || (typeof obj2 != "number"))
        {
            throw new calitha.exception.IllegalArgumentException(Error("Can only compare numbers"));
        }
        return obj1 - obj2;
    }
});

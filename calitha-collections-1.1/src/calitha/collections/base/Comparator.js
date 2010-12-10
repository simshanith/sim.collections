dojo.provide("calitha.collections.base.Comparator");
dojo.require("calitha.collections.IComparator");

/**
 * @name calitha.collections.base.Comparator
 * @class Comparator base on function
 * @extends calitha.collections.IComparator
 */
dojo.declare("calitha.collections.base.Comparator", calitha.collections.IComparator,
/** @lends calitha.collections.base.Comparator#*/
{
    constructor: function(func)
    {
        this._func = func;
    }
    ,
    compare: function(/**Object*/ obj1, /**Object*/ obj2)
    {
        return this._func(obj1, obj2);
    }
});

dojo.provide("calitha.collections.base.ReverseNaturalComparator");
dojo.require("calitha.collections.IComparator");
dojo.require("calitha.exception.IllegalArgumentException");

/**
 * @name calitha.collections.base.ReverseNaturalComparator
 * @class Reverse natural comparator
 * @extends calitha.collections.IComparator
 */
dojo.declare("calitha.collections.base.ReverseNaturalComparator", calitha.collections.IComparator,
/** @lends calitha.collections.base.ReverseNaturalComparator# */
{

    compare: function(/**Object*/ o1, /**Object*/o2)
    {
        if ((!this._isComparable(o2)) || (!this._isComparable(o2)))
        {
            throw new calitha.exception.IllegalArgumentException(Error("Must compare IComparable objects"));
        }
        return this._cmp.compare(o2, o1);
    }
    ,
    _isComparable: function(/**Object*/ obj)
    {
        return calitha.collections.util.isObjectInstanceOf(obj, calitha.collections.IComparable);
    }

});

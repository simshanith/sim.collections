dojo.provide("calitha.collections.base.ReverseComparator");
dojo.require("calitha.collections.IComparator");

dojo.declare("calitha.collections.base.ReverseComparator", calitha.collections.IComparator,
/** @lends calitha.collections.base.ReverseComparator# */
{

    /**
     * @constructs
     * @extends calitha.collections.IComparator
     */
    constructor: function(/**calitha.collections.IComparator*/ cmp)
    {
        this._cmp = cmp;
    }
    ,
    compare: function(/**Object*/ o1, /**Object*/ o2)
    {
        return this._cmp.compare(o2, o1);
    }

});

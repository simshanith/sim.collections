dojo.provide("calitha.collections.AbstractSet");
dojo.require("calitha.collections.ISet");
dojo.require("calitha.collections.AbstractCollection");
dojo.require("calitha.collections.util");

dojo.declare("calitha.collections.AbstractSet", [calitha.collections.ISet, calitha.collections.AbstractCollection],
/** @lends calitha.collections.AbstractSet# */
{
    /**
     * @constructs
     * @extends calitha.collections.ISet
     * @extends calitha.collections.AbstractCollection
     */
    constructor: function()
    {
    }
    ,
    equals: function(/**Object*/ o)
    {
	    if (o === this)
        {
	        return true;
        }

	    if (!(calitha.collections.util.isObjectInstanceOf(o, calitha.collections.ISet)))
        {
	        return false;
        }
        //noinspection UnnecessaryLocalVariableJS
        var set = o;
	    if (set.size() != this.size())
        {
	        return false;
        }
        return this.containsAll(set);
    }
    ,
    hashCode: function()
    {
	    var result = 0;
        var it = this.iterator();
        while (it.hasNext())
        {
            var obj = it.next();
            result += calitha.collections.util.hashCode(obj);
        }
        return result;
    }

});

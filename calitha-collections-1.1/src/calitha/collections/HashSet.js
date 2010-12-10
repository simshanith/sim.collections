dojo.provide("calitha.collections.HashSet");
dojo.require("calitha.collections.AbstractSet");
dojo.require("calitha.collections.HashMap");

dojo.declare("calitha.collections.HashSet", calitha.collections.AbstractSet,
/** @lends calitha.collections.HashSet#*/
{
    /**
     * @constructs
     * @extends calitha.collections.AbstractMap
     * @param initialCapacity optional initial capacity
     * @param loadFactor optional load factor
     * @description This class implements the Set interface, backed by a hash table (actually a HashMap instance).
     * <p>This class is similar to the
     * <a href="http://java.sun.com/javase/6/docs/api/java/util/HashSet.html">Java HashSet class</a>
     * <p>Each object must have an equals and hashCode method. This is also true for numbers and strings.
     * However you can use the {@link calitha.collections.makeNumberHashCompatible} and
     * {@link calitha.collections.makeStringHashCompatible} to use those directly.
     */
    constructor: function(/**Number?*/ initialCapacity, /**Number?*/ loadFactor)
    {
        this._map = new calitha.collections.HashMap(initialCapacity, loadFactor);
    }
    ,
    add: function(/**Object*/ element)
    {
	    return this._map.put(element, this.constants.PRESENT) === null;
    }
    ,
    clear: function()
    {
	    this._map.clear();
    }
    ,
    contains: function(/**Object*/ o)
    {
	    return this._map.containsKey(o);
    }
    ,
    isEmpty: function()
    {
	    return this._map.isEmpty();
    }
    ,
    iterator: function()
    {
	    return this._map.keySet().iterator();
    }
    ,
    remove: function(/**Object*/ o)
    {
	    return this._map.remove(o) === this.constants.PRESENT;
    }
    ,
    size: function()
    {
	    return this._map.size();
    }
    ,
    constants:
    {
        PRESENT: {}
    }
});

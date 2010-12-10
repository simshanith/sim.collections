dojo.provide("calitha.collections.TreeSet");
dojo.require("calitha.collections.INavigableSet");
dojo.require("calitha.collections.AbstractSet");
dojo.require("calitha.collections.INavigableMap");
dojo.require("calitha.collections.IComparator");
dojo.require("calitha.collections.TreeMap");
dojo.require("calitha.collections.ISortedSet");
dojo.require("calitha.collections.util");
dojo.require("calitha.exception.IllegalArgumentException");

dojo.declare("calitha.collections.TreeSet", [calitha.collections.INavigableSet, calitha.collections.AbstractSet],
/** @lends calitha.collections.TreeSet# */
{
    /**
     * @constructs
     * @param arg optional argument which can be a
     * @extends calitha.collections.INavigableSet
     * @extends calitha.collections.AbstractSet
     * @param arg
     * @description A NavigableSet implementation based on a TreeMap.
     * <p>This class is similar to the
     * <a href="http://java.sun.com/javase/6/docs/api/java/util/TreeSet.html">Java TreeSet class</a>
     * <p>This set needs a comparator object or function, or all elements must be IComparable.
     * Take a look at the comparator functions in the {@link calitha.collections} namespace.
     */
    constructor: function(/**(calitha.collections.INavigableMap|calitha.collections.IComparator|Function)?*/arg)
    {
        if (arg == null)
        {
            this._map = new calitha.collections.TreeMap();
        }
        else if (arg.isInstanceOf(calitha.collections.INavigableMap))
        {
            this._map = arg;
        }
        else if ((arg.isInstanceOf(calitha.collections.IComparator)) ||
                (arg.isInstanceOf(Function)))
        {
            this._map = new calitha.collections.TreeMap(arg);
        }
        else
        {
            throw new calitha.exception.IllegalArgumentException(Error("arg is not a navigable map, a comparator or null"));
        }
    }
    ,
    add: function(/**Object*/ e)
    {
	    return this._map.put(e, calitha.collections.TreeSet.PRESENT) === null;
    }
    ,
    addAll: function(/**calitha.collections.ICollection*/ collection)
    {
        //todo: investigate how useful it is to implement this method here
        return this.inherited(arguments);
    }
    ,
    ceiling: function(/**Object*/ element)
    {
        return this._map.ceilingKey(element);
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
    descendingIterator: function()
    {
	    return this._map.descendingKeySet().iterator();
    }
    ,
    descendingSet: function()
    {
	    return new calitha.collections.TreeSet(this._map.descendingMap());
    }
    ,
    floor: function(/**Object*/ element)
    {
        return this._map.floorKey(element);
    }
    ,
    higher: function(/**Object*/ element)
    {
        return this._map.higherKey(element);
    }
    ,
    isEmpty: function()
    {
	    return this._map.isEmpty();
    }
    ,
    iterator: function()
    {
        return this._map.navigableKeySet().iterator();
    }
    ,
    lower: function(/**Object*/ element)
    {
        return this._map.lowerKey(element);
    }
    ,
    pollFirst: function()
    {
        var entry = this._map.pollFirstEntry();
        return (entry === null) ? null : entry.getKey();
    }
    ,
    pollLast: function()
    {
        var entry = this._map.pollLastEntry();
        return (entry === null) ? null : entry.getKey();
    }
    ,
    remove: function(/**Object*/ o)
    {
	    return this._map.remove(o) === calitha.collections.TreeSet.PRESENT;
    }
    ,
    size: function()
    {
	    return this._map.size();
    }

});

calitha.collections.TreeSet._PRESENT = new Object();

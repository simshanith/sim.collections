dojo.provide("calitha.collections.treemap.KeySet");
dojo.require("calitha.collections.INavigableSet");
dojo.require("calitha.collections.AbstractSet");
dojo.require("calitha.collections.TreeSet");

dojo.declare("calitha.collections.treemap.KeySet", [calitha.collections.INavigableSet, calitha.collections.AbstractSet],
/** @lends calitha.collections.treemap.KeySet# */
{
    /**
     * @constructs
     * @extends calitha.collections.INavigableSet
     * @extends calitha.collections.AbstractSet
     */
    constructor: function(/**calitha.collections.TreeMap*/ map)
    {
        this._map = map;
    }
    ,
    ceiling: function(/**calitha.collections.treemap.Entry*/ e)
    {
        return this._map.ceilingKey(e);
    }
    ,
    clear: function()
    {
        this._map.clear();
    }
    ,
    comparator: function()
    {
        return this._map.comparator();
    }
    ,
    contains: function(/**Object*/ o)
    {
        return this._map.containsKey(o);
    }
    ,
    descendingIterator: function()
    {
        return this._map.descendingKeyIterator();
    }
    ,
    descendingSet: function()
    {
        return new calitha.collections.TreeSet(this._map.descendingMap());
    }
    ,
    first: function()
    {
        return this._map.first();
    }
    ,
    floor: function(/**calitha.collections.treemap.Entry*/ e)
    {
        return this._map.floorKey(e);
    }
    ,
    headSet: function(/**Object*/ toElement, /**Boolean*/ inclusive)
    {
        return new calitha.collections.TreeSet(this._map.headMap(toElement, inclusive));
    }
    ,
    higher: function(/**calitha.collections.treemap.Entry*/ e)
    {
        return this._map.higherKey(e);
    }
    ,
    isEmpty: function()
    {
        return this._map.isEmpty();
    }
    ,
    iterator: function()
    {
        return this._map.keyIterator();
    }
    ,
    last: function()
    {
        return this._map.last();
    }
    ,
    lower: function(/**calitha.collections.treemap.Entry*/ e)
    {
        return this._map.lowerKey(e);
    }
    ,
    pollFirst: function()
    {
        var e = this._map.pollFirstEntry();
        return e === null ? null : e.getKey();
    }
    ,
    pollLast: function()
    {
        var e = this._map.pollLastEntry();
        return e === null ? null : e.getKey();
    }
    ,
    remove: function(/**Object*/ o)
    {
        var oldSize = this._map.size();
        this._map.remove(o);
        return this._size() != oldSize;
    }
    ,
    size: function()
    {
        return this._map.size();
    }
    ,
    subSet: function(/**Object*/ fromElement, /**Boolean*/ fromInclusive, /**Object*/ toElement, /**Boolean*/ toInclusive)
    {
        return new calitha.collections.TreeSet(this._map.subMap(fromElement, fromInclusive, toElement, toInclusive));
    }
    ,
    tailSet: function(/**Object*/ fromElement, /**Boolean*/ inclusive)
    {
        return new calitha.collections.TreeSet(this._map.tailMap(fromElement, inclusive));
    }

});

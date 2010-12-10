dojo.provide("calitha.collections.LinkedList");
dojo.require("calitha.collections.AbstractList");
dojo.require("calitha.collections.linkedlist.EntryIndexCache");
dojo.require("calitha.collections.linkedlist.Entry");
dojo.require("calitha.collections.linkedlist.ListIterator");
dojo.require("calitha.exception.IndexOutOfBoundsException");

dojo.declare("calitha.collections.LinkedList", calitha.collections.AbstractList,
/** @lends calitha.collections.LinkedList#*/
{
    /**
     * @constructs
     * @extends calitha.collections.AbstractList
     * @description Linked list implementation of the List interface.
     * <p>This class is similar to the
     * <a href="http://java.sun.com/javase/6/docs/api/java/util/LinkedList.html">Java LinkedList class</a>
     */
    constructor: function()
    {
        this._first = null;
        this._last = null;
        this._size = 0;
        this._cache = new calitha.collections.linkedlist.EntryIndexCache();
    }
    ,
    clear: function()
    {
        this._modCount++;
        var entry = this._first;
        while (entry != null)
        {
            var nextEntry = entry.next;
            entry.prev = null;
            entry.next = null;
            entry = nextEntry;
        }
        this._first = null;
        this._last = null;
        this._size = 0;
        this._cache.entry = null;
    }
    ,
    get: function(/**Number*/ index)
    {
        return this._getEntry(index).element;
    }
    ,
    insert: function(/**Number*/ index, /**Object*/ element)
    {
        if (index < 0 || index > this.size())
        {
            throw new calitha.exception.IndexOutOfBoundsException(Error(), index, this._size);
        }
        this._modCount++;
        var newEntry;
        if (index === this.size())
        {
            newEntry = new calitha.collections.linkedlist.Entry(element, this._last, null);
        }
        else
        {
            var entry = this._getEntry(index);
            this._cache.index++; // going to insert entry at this location
            newEntry = new calitha.collections.linkedlist.Entry(element, entry.prev, entry);
        }
        this._updateInsertLinks(newEntry);
        this._size++;
    }
    ,
    listIterator: function(/**Number?*/ index)
    {
        return new calitha.collections.linkedlist.ListIterator(this, index);
    }
    ,
    del: function(/**Number*/ index)
    {
        if (index < 0 || index >= this.size())
        {
            throw new calitha.exception.IndexOutOfBoundsException(Error(), index, this._size);
        }
        this._modCount++;
        var entry = this._getEntry(index);
        return this._removeEntry(entry);
    }
    ,
    set: function(/**Number*/ index, /**Object*/ element)
    {
        this._modCount++;
        var entry = this._getEntry(index);
        var oldValue = entry.element;
        entry.element = element;
        return oldValue;        
    }
    ,
    size: function()
    {
        return this._size;
    }
    ,
    _getEntry: function(/**Number*/ index)
    {
        if (index < 0 || index >= this._size)
        {
            throw new calitha.exception.IndexOutOfBoundsException(Error(), index, this._size);
        }

        //noinspection UnnecessaryLocalVariableJS
        var distanceFromFirst = index;
        var distanceFromLast = index - (this._size - 1);
        var distanceFromCache;
        if (this._cache.entry === null)
        {
            distanceFromCache = Number.POSITIVE_INFINITY;
        }
        else
        {
            distanceFromCache = index - this._cache.index;
        }

        var entry;
        var distance;
        if ((distanceFromFirst <= Math.abs(distanceFromLast)) && (distanceFromFirst <= Math.abs(distanceFromCache)))
        {
            entry = this._first;
            distance = distanceFromFirst;
        }
        else if (Math.abs(distanceFromLast) <= Math.abs(distanceFromCache))
        {
            entry = this._last;
            distance = distanceFromLast;
        }
        else
        {
            entry = this._cache.entry;
            distance = distanceFromCache;
        }

        entry = this._travel(entry, distance);
        this._cache.index = index;
        this._cache.entry = entry;
        return entry;
    }
    ,
    _removeEntry: function(/**calitha.collections.linkedlist.Entry*/ entry)
    {
        if (entry.prev != null)
            entry.prev.next = entry.next;
        if (entry.next != null)
            entry.next.prev = entry.prev;
        if (entry === this._first)
            this._first = entry.next;
        if (entry === this._last)
            this._last = entry.prev;

        this._size--;
        this._cache.entry = null;
        return entry.element;
    }
    ,
    _travel: function(/**calitha.collections.linkedlist.Entry*/ entry, /**Number*/ distance)
    {
        var i;
        if (distance >= 0)
        {
            for (i = 0; i < distance; i++)
            {
                entry = entry.next;
            }
            return entry;
        }
        else
        {
            distance = Math.abs(distance);
            for (i = 0; i < distance; i++)
            {
                entry = entry.prev;
            }
            return entry;
        }
    }
    ,
    _updateInsertLinks: function(/**calitha.collections.linkedlist.Entry*/ entry)
    {
        if (entry.prev === null)
        {
            this._first = entry;
        }
        else
        {
            entry.prev.next = entry;
        }
        if (entry.next === null)
        {
            this._last = entry;
        }
        else
        {
            entry.next.prev = entry;
        }
    }

});

dojo.provide("calitha.collections.ArrayList");
dojo.require("calitha.collections.AbstractList");
dojo.require("calitha.collections.util");
dojo.require("calitha.collections.arrays");
dojo.require("calitha.exception.IndexOutOfBoundsException");

dojo.declare("calitha.collections.ArrayList", calitha.collections.AbstractList,
/** @lends calitha.collections.ArrayList#*/
{

    /**
     * @constructs
     * @extends calitha.collections.AbstractList
     * @param initialCapacity optional initial capacity of the underlying array
     * @description This is a list implementation backed by an array.
     * <p>This class is similar to the
     * <a href="http://java.sun.com/javase/6/docs/api/java/util/ArrayList.html">Java ArrayList class</a>
     */
    constructor: function(/**Number?*/ initialCapacity)
    {
        if (initialCapacity == null)
        {
            initialCapacity = 10;
        }
        this._array = new Array(initialCapacity);
        this._size = 0;
    }
    ,
    addAll: function(/**calitha.collections.ICollection*/ collection)
    {
        return this.insertAll(this._size, collection);
    }
    ,
    clear: function()
    {
        this._modCount++;
        for (var i = 0; i < this._size; i++)
        {
            this._array[i] = null;
        }
        this._size = 0;
    }
    ,
    del: function(/**Number*/ index)
    {
        if (index < 0 || index >= this.size())
        {
            throw new calitha.exception.IndexOutOfBoundsException(Error(), index, this._size);
        }
        this._modCount++;
        var element = this.get(index);
        this._array.splice(index, 1);
        this._size--;
        return element;
    }
    ,
    ensureCapacity: function(/**Number*/ minCapacity)
    {
        this._modCount++;
        if (minCapacity > this._array.length)
        {
            this._array.length = minCapacity;
        }
    }
    ,
    get: function(/**Number*/ index)
    {
        this._rangeCheck(index);
        return this._array[index];
    }
    ,
    indexOf: function indexOf(/**Object*/ element)
    {
        for (var i = 0;  i < this.size(); i++)
        {
            if (calitha.collections.util.equals(this.get(i), element))
            {
                return i;
            }
        }
        return -1;
    }
    ,
    insert: function insert(/**Number*/ index, /**Object*/ element)
    {
        if (index < 0 || index > this.size())
        {
            throw new calitha.exception.IndexOutOfBoundsException(Error(), index, this._size);
        }
        this._modCount++;
        this._array.splice(index, 0, element);
        this._size++;
    }
    ,
    insertAll: function(/**Number*/ index, /**calitha.collections.ICollection*/ collection)
    {
        if (index > this._size || index < 0)
        {
            throw new calitha.exception.IndexOutOfBoundsException(Error(), index, this._size);
        }
        if (collection.isEmpty())
        {
            return false;
        }
        var a = collection.toArray();
        calitha.collections.arrays.insertRangeToArray(a, 0, a.length, this._array, index);
        this._size += a.length;
        return true;
    }
    ,
    lastIndexOf: function lastIndexOf(/**Object*/ element)
    {
        for (var i = this.size() - 1; i >= 0; i--)
        {
            if (calitha.collections.util.equals(this.get(i), element))
            {
                return i;
            }
        }
        return -1;
    }
    ,
    remove: function(/**Object*/ element)
    {
        for (var i = 0; i < this.size(); i++)
        {
            if (calitha.collections.util.equals(this.get(i), element))
            {
                this.del(i);
                return true;
            }
        }
        return false;
    }
    ,
    set: function(/**Number*/ index, /**Object*/ element)
    {
	    this._rangeCheck(index);
        var oldValue = this._array[index];
        this._array[index] = element;
        return oldValue;
    }
    ,
    size: function()
    {
        return this._size;
    }
    ,
    toArray: function()
    {
        return this._array.slice(0, this._size);
    }
    ,
    trimToSize: function() 
    {
        this._modCount++;
        this._array.length = this._size;
    }
    ,
    _rangeCheck: function(/**Number*/ index)
    {
        if ((index < 0) ||(index >= this._size))
        {
            throw new calitha.exception.IndexOutOfBoundsException(Error(), index, this._size);
        }
    }
    ,
    _removeRange: function(/**Number*/ fromIndex, /**Number*/ toIndex)
    {
        calitha.collections.arrays.copyRange(this._array, toIndex, this._size, fromIndex);
        this._size -= toIndex - fromIndex;
    }

});

dojo.provide("calitha.collections.SubList");
dojo.require("calitha.collections.AbstractList");
dojo.require("calitha.collections.sublist.ListIterator");
dojo.require("calitha.exception.IndexOutOfBoundsException");

dojo.declare("calitha.collections.SubList", calitha.collections.AbstractList,
/** @lends calitha.collections.SubList# */
{
    /**
     * @constructs
     * @param list list
     * @param fromIndex from index
     * @param toIndex to index (not inclusive)
     * @extends calitha.collections.AbstractList
     * @description a view on a part of a list
     */
    constructor: function(/**calitha.collections.IList*/ list, /**Number*/ fromIndex, /**Number*/ toIndex)
    {
        if (fromIndex < 0)
        {
            throw new calitha.exception.IndexOutOfBoundsException(Error(), fromIndex, list.size());
        }
        if (toIndex > list.size())
        {
            throw new calitha.exception.IndexOutOfBoundsException(Error(), toIndex, list.size());
        }
        this._list = list;
        this._offset = fromIndex;
        this._size = toIndex - fromIndex;
    }
    ,
    addAll: function(/**calitha.collections.ICollection*/ collection)
    {
        return this.insertAll(this._size, collection);
    }
    ,
    get: function(/**Number*/ index)
    {
        this._rangeCheck(index);
        return this._list.get(index + this._offset);
    }
    ,
    insert: function(/**Number*/ index, /**Object*/ element)
    {
        if (index < 0 || index > this._size)
        {
            throw new calitha.exception.IndexOutOfBoundsException(Error(), index, this._size);
        }
        this._list.insert(index + this._offset, element);
        this._size++;
    }
    ,
    insertAll: function(/**Number*/ index, /**calitha.collections.ICollection*/ collection)
    {
        if (index < 0 || index > this._size)
        {
            throw new calitha.collections.IndexOutOfBoundsException(Error(), index, this._size);
        }
        var collectionSize = collection.size();
        if (collectionSize === 0)
        {
            return false;
        }

        this._list.insertAll(this._offset + index, collection);
        this._size += collectionSize;
        return true;
    }
    ,
    iterator: function()
    {
        return this.listIterator();
    }
    ,
    listIterator: function(/**Number*/ index)
    {
        if (index == null)
        {
            index = 0;
        }
        if (index < 0 || index > this._size)
        {
            throw new calitha.exception.IndexOutOfBoundsException(Error(), index, this._size);
        }
        return calitha.collections.sublist.ListIterator(index);
    }
    ,
    remove: function(/**Number*/ index)
    {
        this._rangeCheck(index);
        var result = this._list.remove(index + this._offset);
        this._size--;
        return result;
    }
    ,
    set: function(/**Number*/ index, /**Object*/ element)
    {
        this._rangeCheck(index);
        return this._list.set(index + this._offset, element);
    }
    ,
    size: function()
    {
        return this._size;
    }
    ,
    subList: function(/**Number*/ fromIndex, /**Number*/ toIndex)
    {
        return new calitha.collections.SubList(this, fromIndex, toIndex);
    }
    ,
    _rangeCheck: function(/**Number*/ index)
    {
        if (index < 0 || index >= this._size)
        {
            throw new calitha.exception.IndexOutOfBoundsException(Error(), index, this._size);
        }
    }
    ,
    _removeRange: function(/**Number*/ fromIndex, /**Number*/ toIndex)
    {
        this._list.removeRange(fromIndex + this._offset, toIndex + this._offset);
        this._size -= (toIndex - fromIndex);
    }

});

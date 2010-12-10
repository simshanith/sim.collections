dojo.provide("calitha.collections.sublist.ListIterator");
dojo.require("calitha.collections.IListIterator");
dojo.require("calitha.exception.NoSuchElementException");

dojo.declare("calitha.collections.sublist.ListIterator", calitha.collections.IListIterator,
/** @lends calitha.collections.sublist.ListIterator# */
{
    /**
     * @constructs
     * @extends calitha.collections.IListIterator
     */
    constructor: function(/**calitha.collections.SubList*/ list, /**Number*/ index)
    {
        this._list = list;
        this._index = index;
        this._iterator = list.listIterator(index + list._offset);
    }
    ,
    add: function(/**Object*/ element)
    {
        this._iterator.add(element);
        this._list.size++;
    }
    ,
    hasNext: function()
    {
        return this.nextIndex() < this._size;
    }
    ,
    hasPrevious: function()
    {
        return this.previousIndex() >= 0;
    }
    ,
    next: function()
    {
        if (this.hasNext())
        {
            return this._iterator.next();
        }
        else
        {
            throw new calitha.exception.NoSuchElementException(Error());
        }
    }
    ,
    nextIndex: function()
    {
        return this._iterator.nextIndex() - this._offset;
    }
    ,
    previous: function()
    {
        if (this.hasPrevious())
        {
            return this._iterator.previous();
        }
        else
        {
            throw new calitha.exception.NoSuchElementException(Error());
        }
    }
    ,
    previousIndex: function()
    {
        return this._iterator.previousIndex() - this._offset;
    }
    ,
    remove: function()
    {
        this._iterator.remove();
        this._list.size--;
    }
    ,
    set: function(/**Object*/ element)
    {
        this._iterator.set(element);
    }

});

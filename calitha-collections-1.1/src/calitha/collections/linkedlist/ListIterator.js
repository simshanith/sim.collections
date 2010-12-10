dojo.provide("calitha.collections.linkedlist.ListIterator");
dojo.require("calitha.collections.IListIterator");
dojo.require("calitha.exception.IndexOutOfBoundsException");
dojo.require("calitha.exception.NoSuchElementException");
dojo.require("calitha.exception.IllegalStateException");

dojo.declare("calitha.collections.linkedlist.ListIterator", calitha.collections.IListIterator,
/** @lends calitha.collections.linkedlist.ListIterator# */
{
    /**
     * @constructs
     * @extends calitha.collections.IListIterator
     */
    constructor: function(/**calitha.collections.LinkedList*/ list, /**Number*/ index)
    {
        if (index == null)
        {
            index = 0;
        }
        if (index < 0 || index > list.size())
        {
            throw new calitha.exception.IndexOutOfBoundsException(Error(), index, list.size());
        }
        this._list = list;
        if (index == list.size())
        {
            this._next = new calitha.collections.linkedlist.Entry(null, list._last, null);
        }
        else
        {
            this._next = list._getEntry(index);
        }
        this._nextIndex = index;
        this._lastReturned = null;
        this._expectedModCount = list._modCount;
    }
    ,
    add: function(/**Object*/ element)
    {
        this._checkForComodification();
        this._lastReturned = null;
        this._list.insert(this._nextIndex, element);
        this._nextIndex++;
    }
    ,
    hasNext: function()
    {
        return this._nextIndex != this._list.size();
    }
    ,
    hasPrevious: function()
    {
        return this._nextIndex != 0;
    }
    ,
    next: function()
    {
        if (this._nextIndex === this._list.size())
        {
            throw new calitha.exception.NoSuchElementException(Error());
        }
        this._checkForComodification();
        this._lastReturned = this._next;
        this._next = this._next.next;
        this._nextIndex++;
        return this._lastReturned.element;
    }
    ,
    nextIndex: function()
    {
        return this._nextIndex;
    }
    ,
    previous: function()
    {
        if (this._nextIndex === 0)
        {
            throw new calitha.exception.NoSuchElementException(Error());
        }
        this._checkForComodification();
        this._next = this._next.prev;
        this._lastReturned = this._next;
        this._nextIndex--;
        return this._lastReturned.element;
    }
    ,
    previousIndex: function()
    {
        return this._nextIndex - 1;
    }
    ,
    remove: function()
    {
        if (this._lastReturned === null)
        {
            throw new calitha.exception.IllegalStateException(Error("Unable to remove in this state"));
        }
        this._checkForComodification();
        var lastNext = this._lastReturned.next;
        this._list._removeEntry(this._lastReturned);
        if (this._next === this._lastReturned)
        {
            this._next = lastNext;
        }
        else
        {
            this._nextIndex--;
        }
        this._lastReturned = null;
        this._expectedModCount++;
    }
    ,
    set: function(/**Object*/ element)
    {
        if (this._lastReturned === null)
        {
            throw new calitha.exception.IllegalStateException(Error("Unable to set in this state"));
        }
        this._checkForComodification();
        this._lastReturned.element = element;
    }
    ,
    _checkForComodification: function()
    {
        if (this._modCount != this._list._expectedModCount)
        {
            throw new calitha.collections.linkedlist.ConcurrentModificationException();
        }
    }

});

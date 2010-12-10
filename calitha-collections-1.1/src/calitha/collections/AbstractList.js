dojo.provide("calitha.collections.AbstractList");
dojo.require("calitha.collections.IList");
dojo.require("calitha.collections.AbstractCollection");
dojo.require("calitha.exception.UnsupportedOperationException");
dojo.require("calitha.collections.abstractlist.Iterator");
dojo.require("calitha.collections.abstractlist.ListIterator");
dojo.require("calitha.collections.SubList");

dojo.declare("calitha.collections.AbstractList", [calitha.collections.IList, calitha.collections.AbstractCollection],
/** @lends calitha.collections.AbstractList# */
{
    /**
     * @constructs
     * @extends calitha.collections.IList
     * @extends calitha.collections.AbstractCollection
     */
    constructor: function()
    {
        this._modCount = 0;
    }
    ,
    add: function(/**Object*/ element)
    {
        this.insert(this.size(), element);
        return true;
    }
    ,
    clear: function()
    {
        this._removeRange(0, this.size());
    }
    ,
    contains: function(/**Object*/ element)
    {
	    return this.indexOf(element) != -1;
    }
    ,
    del: function(/**Number*/ index)
    {
        throw new calitha.exception.UnsupportedOperationException(Error());
    }
    ,
    equals: function(/**Object*/ obj)
    {
        if (obj === this)
        {
            return true;
        }
        if (!calitha.collections.util.isObjectInstanceOf(obj, calitha.collections.AbstractList))
        {
            return false;
        }

        var it1 = this.listIterator();
        var it2 = obj.listIterator();
        while(it1.hasNext() && it2.hasNext())
        {
            var o1 = it1.next();
            var o2 = it2.next();
            if (!calitha.collections.util.equals(o1, o2))
            {
                return false;
            }
    	}
	    return !(it1.hasNext() || it2.hasNext());
    }
    ,
    hashCode: function()
    {
        var hashCode = 1;
        var it = this.iterator();
        while (it.hasNext())
        {
            var obj = it.next();
            hashCode = 31 * hashCode + calitha.collections.util.hashCode(obj);
        }
        return hashCode;
    }
    ,
    indexOf: function(/**Object*/ element)
    {
        var it = this.listIterator();
        while (it.hasNext())
        {
            if (calitha.collections.util.equals(it.next(), element))
            {
                return it.previousIndex();
            }
        }
        return -1;
    }
    ,
    insert: function(/**Number*/ index, /**Object*/ element)
    {
        throw new calitha.exception.UnsupportedOperationException(Error());
    }
    ,
    insertAll: function(/**Number*/ index, /**calitha.collections.ICollection*/ collection)
    {
        var modified = false;
        var it = collection.iterator();
        while (it.hasNext())
        {
            this.insert(index++, it.next());
            modified = true;
        }
        return modified;
    }
    ,
    iterator: function()
    {
        return new calitha.collections.abstractlist.Iterator(this);
    }
    ,
    lastIndexOf: function(/**Object*/ element)
    {
        var it = this.listIterator(this.size());
        while (it.hasPrevious())
        {
            if (calitha.collections.util.equals(it.previous(), element))
            {
                return it.nextIndex();
            }
        }
        return -1;
    }
    ,
    listIterator: function(/**Number*/ index)
    {
        if (index == null)
        {
            index = 0;
        }
        return new calitha.collections.abstractlist.ListIterator(this, index);
    }
    ,
    set: function(/**Number*/ index, /**Object*/ element)
    {
        throw new calitha.exception.UnsupportedOperationException(Error());
    }
    ,
    sort: function(/**calitha.collections.IComparator?*/ comparator)
    {
        calitha.collections.sort(this, comparator);
    }
    ,
    subList: function(/**Number*/ fromIndex, /**Number*/ toIndex)
    {
        return new calitha.collections.SubList(this, fromIndex, toIndex);
    }
    ,
    _removeRange: function(/**Number*/ fromIndex, /**Number*/ toIndex)
    {
        var it = this.listIterator(fromIndex);
        for (var i = 0, n = toIndex - fromIndex; i < n; i++)
        {
            it.next();
            it.remove();
        }
    }
});



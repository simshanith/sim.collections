dojo.provide("calitha.collections.AbstractCollection");
dojo.require("calitha.collections.ICollection");
dojo.require("calitha.collections.StringBuilder");
dojo.require("calitha.exception.UnsupportedOperationException");

dojo.declare("calitha.collections.AbstractCollection", calitha.collections.ICollection,
/** @lends calitha.collections.AbstractCollection# */
{
    /**
     * @constructs
     * @extends calitha.collections.ICollection
     */
    constructor: function()
    {
    }
    ,
    add: function(/*Object*/ element)
    {
        throw new calitha.exception.UnsupportedOperationException(Error());
    }
    ,
    addAll: function(/**calitha.collections.ICollection*/ collection)
    {
        var modified = false;
        var it = collection.iterator();
        while (it.hasNext())
        {
            if (this.add(it.next()))
            {
                modified = true;
            }
        }
        return modified;
    }
    ,
    clear: function()
    {
        var it = this.iterator();
        while (it.hasNext())
        {
            it.next();
            it.remove();
        }
    }
    ,
    contains: function(/**Object*/ element)
    {
        var it = this.iterator();
        while (it.hasNext())
        {
            if (calitha.collections.util.equals(it.next(), element))
                return true;
        }
        return false;
    }
    ,
    containsAll: function(/**calitha.collections.ICollection*/ collection)
    {
        var it = collection.iterator();
        while (it.hasNext())
        {
            if (!this.contains(it.next()))
            {
                return false;
            }
        }
        return true;
    }
    ,
    forEach: function(/**Function*/ func, /**Object?*/ scope)
    {
        if (scope == null)
        {
            scope = dojo.global;
        }
        var it = this.iterator();
        while (it.hasNext())
        {
            func.call(scope, it.next());
        }
    }
    ,
    isEmpty: function()
    {
        return this.size() === 0;
    }
    ,
    remove: function(/**Object*/ element)
    {
        var it = this.iterator();
        while (it.hasNext())
        {
            if (calitha.collections.util.equals(it.next(), element))
            {
                it.remove();
                return true;
            }
        }
        return false;
    }
    ,
    removeAll: function(/**calitha.collections.ICollection*/ collection)
    {
        var modified = false;

        if (this.size() > collection.size())
        {
            var collectionIterator = collection.iterator();
            while (collectionIterator.hasNext())
            {
                var objInCollection = collectionIterator.next();
                modified |= this.remove(objInCollection);
            }
        }
        else
        {
            var thisIterator = this.iterator();
            while (thisIterator.hasNext())
            {
                var objInThis = thisIterator.next();
                if (collection.contains(objInThis))
                {
                    thisIterator.remove();
                    modified = true;
                }
            }
        }
        return modified;
    }
    ,
    retainAll: function(/**calitha.collections.ICollection*/ collection)
    {
        var modified = false;
        var it = this.iterator();
        while (it.hasNext())
        {
            if (!collection.contains(it.next()))
            {
                it.remove();
                modified = true;
            }
        }
        return modified;
    }
    ,
    toArray: function()
    {
        var result = new Array(this.size());
        var it = this.iterator();
        for (var i = 0; it.hasNext(); i++)
        {
            result[i] = it.next();
        }
        return result;
    }
    ,
    toString: function()
    {
        var buf = new calitha.collections.StringBuilder();
        buf.append("[");
        var it = this.iterator();
        while (it.hasNext())
        {
            var o = it.next();
            buf.append(o === this ? "(this Collection)" : "" + o);
            if (it.hasNext())
                buf.append(", ");
        }
        buf.append("]");
        return buf.toString();        
    }
});

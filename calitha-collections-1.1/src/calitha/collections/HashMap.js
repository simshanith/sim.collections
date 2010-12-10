dojo.provide("calitha.collections.HashMap");
dojo.require("calitha.collections.AbstractMap");
dojo.require("calitha.collections.imap.IEntry");
dojo.require("calitha.collections.hashmap.Entry");
dojo.require("calitha.collections.util");
dojo.require("calitha.collections.hashmap.EntrySet");
dojo.require("calitha.collections.hashmap.KeySet");
dojo.require("calitha.collections.hashmap.Values");
dojo.require("calitha.collections.hashmap.EntryIterator");
dojo.require("calitha.collections.hashmap.KeyIterator");
dojo.require("calitha.collections.hashmap.ValueIterator");
dojo.require("calitha.exception.IllegalArgumentException");

dojo.declare("calitha.collections.HashMap", calitha.collections.AbstractMap,
/** @lends calitha.collections.HashMap#*/
{
    /**
     * @constructs
     * @extends calitha.collections.AbstractMap
     * @param initialCapacity optional initial capacity
     * @param loadFactor optional loadFactor
     * @description Hash table based implementation of the Map interface.
     * <p>This class is similar to the
     * <a href="http://java.sun.com/javase/6/docs/api/java/util/HashMap.html">Java HashMap class</a>
     * <p>Each key object must have an equals and hashCode method. This is also true for numbers and strings.
     * However you can use the {@link calitha.collections.makeNumberHashCompatible} and
     * {@link calitha.collections.makeStringHashCompatible} to use those directly.
     */
    constructor: function(/**Number?*/ initialCapacity, /**Number?*/ loadFactor)
    {
        if (initialCapacity == null)
        {
            initialCapacity = calitha.collections.HashMap._DEFAULT_INITIAL_CAPACITY;
        }
        if (loadFactor == null)
        {
            loadFactor = calitha.collections.HashMap._DEFAULT_LOAD_FACTOR;
        }
        if (initialCapacity < 0)
        {
            throw new calitha.exception.IllegalArgumentException(Error("Illegal initial capacity: " + initialCapacity));
        }
        if (initialCapacity > calitha.collections.HashMap._DEFAULT_INITIAL_CAPACITY)
        {
            initialCapacity = calitha.collections.HashMap._DEFAULT_INITIAL_CAPACITY;
        }
        if (loadFactor <= 0 || isNaN(loadFactor))
        {
            throw new calitha.exception.IllegalArgumentException(Error("Illegal load factor: " + loadFactor));
        }

        // Find a power of 2 >= initialCapacity
        var capacity = 1;
        while (capacity < initialCapacity)
        {
            capacity <<= 1;
        }

        this._loadFactor = loadFactor;
        this._threshold = Math.round(capacity * loadFactor);
        this._table = new Array(capacity);
        this._size = 0;
        this._modCount = 0;
        this._entrySet = null;
        this._init();
    }
    ,
    clear: function()
    {
        this._modCount++;
        for (var i = 0; i < this._table.length; i++)
        {
            this._table[i] = null;
        }
        this._size = 0;
    }
    ,
    containsKey: function(/**Object*/ key)
    {
        return this._getEntry(key) != null;
    }
    ,
    containsValue: function(/**Object*/ value)
    {
        for (var i = 0; i < this._table.length ; i++)
        {
            for (var entry = this._table[i]; entry != null; entry = entry.getNext())
            {
                if (calitha.collections.util.equals(value, entry.getValue()))
                {
                    return true;
                }
            }
        }
    	return false;
    }
    ,
    entrySet: function()
    {
        if (this._entrySet === null)
        {
            this._entrySet = new calitha.collections.hashmap.EntrySet(this);
        }
        return this._entrySet;
    }
    ,
    get: function(/**Object*/ key)
    {
        if (key === null)
        {
            return this._getForNullKey();
        }
        var hash = this._hash(key.hashCode());
        var index = this._indexFor(hash, this._table.length);
        var entry = this._table[index];
        while (entry != null)
        {
            if ((entry.getHash() === hash) && (calitha.collections.util.equals(key, entry.getKey())))
            {
                return entry.getValue();
            }
            entry = entry.getNext();
        }
        return null;
    }
    ,
    isEmpty: function()
    {
        return this._size === 0;
    }
    ,
    keySet: function()
    {
        if (this._keySet === null)
        {
            this._keySet = new calitha.collections.hashmap.KeySet(this);
        }
        return this._keySet;
    }
    ,
    put: function(/**Object*/ key, /**Object*/ value)
    {
        if (key === null)
        {
            return this._putForNullKey(value);
        }
        var hash = this._hash(calitha.collections.util.hashCode(key));
        var index = this._indexFor(hash, this._table.length);
        var entry = this._table[index];
        while (entry != null)
        {
            if ((entry.getHash() === hash) && (calitha.collections.util.equals(entry.getKey(), key)))
            {
                var oldValue = entry.setValue(value);
                entry.recordAccess(this);
                return oldValue;
            }
            entry = entry.getNext();
        }
        this._modCount++;
        this._addEntry(hash, key, value, index);
        return null;
    }
    ,
    putAll: function(/**calitha.collections.IMap*/ map)
    {
        var numKeysToBeAdded = map.size();
        if (numKeysToBeAdded === 0)
        {
            return;
        }

        /*
         * Expand the map if the map if the number of mappings to be added
         * is greater than or equal to threshold.  This is conservative; the
         * obvious condition is (m.size() + size) >= threshold, but this
         * condition could result in a map with twice the appropriate capacity,
         * if the keys to be added overlap with the keys already in this map.
         * By using the conservative calculation, we subject ourself
         * to at most one extra resize.
         */
        if (numKeysToBeAdded > this._threshold)
        {
            var targetCapacity = Math.round(numKeysToBeAdded / this._loadFactor + 1);
            if (targetCapacity > calitha.collections.HashMap._MAXIMUM_CAPACITY)
            {
                targetCapacity = calitha.collections.HashMap._MAXIMUM_CAPACITY;
            }
            var newCapacity = this._table.length;
            while (newCapacity < targetCapacity)
            {
                newCapacity <<= 1;
            }
            if (newCapacity > this._table.length)
            {
                this._resize(newCapacity);
            }
        }

        var it = map.entrySet().iterator();
        while (it.hasNext())
        {
            var entry = it.next();
            this.put(entry.getKey(), entry.getValue());
        }
    }
    ,
    remove: function(/**Object*/ key)
    {
        var entry = this._removeEntryForKey(key);
        return (entry === null ? null : entry.getValue());
    }
    ,
    size: function()
    {
        return this._size;
    }
    ,
    values: function()
    {
        if (this._values === null)
        {
            this._values = new calitha.collections.hashmap.Values(this);
        }
        return this._values;
    }
    ,
    _addEntry: function(/**Number*/ hash, /**Object*/ key, /**Object*/ value, /**Number*/ bucketIndex)
    {
        this._table[bucketIndex] = new calitha.collections.hashmap.Entry(hash, key, value, this._table[bucketIndex]);
        if (this._size++ >= this._threshold)
        {
            this._resize(2 * this._table.length);
        }
    }
    ,
    _getEntry: function(/**Object*/ key)
    {
        if ((key != null) && (key.hashCode == null))
        {
            return null;
        }
        var hash = (key === null) ? 0 : this._hash(key.hashCode());
        var index = this._indexFor(hash, this._table.length);
        var entry = this._table[index];
        while (entry != null)
        {
            if ((entry.getHash() === hash) && (calitha.collections.util.equals(entry.getKey(), key)))
            {
                return entry;
            }
            entry = entry.getNext();
        }
        return null;
    }
    ,
    _getForNullKey: function()
    {
        var entry = this._table[0];
        while (entry != null)
        {
            if (entry.getKey() === null)
            {
                return entry.getValue();
            }
            entry = entry.getNext();
        }
        return null;
    }
    ,
    _hash: function(/**Number*/ h)
    {
        h ^= (h >>> 20) ^ (h >>> 12);
        return h ^ (h >>> 7) ^ (h >>> 4);
    }
    ,
    _indexFor: function(/**Number*/ hash, /**Number*/ length)
    {
        return hash & (length - 1);
    }
    ,
    _init: function()
    {
    }
    ,
    _newEntryIterator: function()
    {
        return new calitha.collections.hashmap.EntryIterator(this);
    }
    ,
    _newKeyIterator: function()
    {
        return new calitha.collections.hashmap.KeyIterator(this);
    }
    ,
    _newValueIterator: function()
    {
        return new calitha.collections.hashmap.ValueIterator(this);
    }
    ,
    _putForNullKey: function(/**Object*/ value)
    {
        var entry = this._table[0];
        while (entry != null)
        {
            if (entry.getKey() === null)
            {
                var oldValue = entry.setValue(value);
                entry.recordAccess(this);
                return oldValue;
            }
        }
        this._modCount++;
        this._addEntry(0, null, value, 0);
        return null;
    }
    ,
    _removeEntryForKey: function(/**Object*/ key)
    {
        var hash = calitha.collections.util.hashCode(key);
        hash = this._hash(hash);

        var index = this._indexFor(hash, this._table.length);
        var prev = this._table[index];
        var entry = prev;

        while (entry != null)
        {
            var next = entry.getNext();
            if ((entry.getHash() === hash) && (calitha.collections.util.equals(entry.getKey(), key)))
            {
                this._modCount++;
                this._size--;
                if (prev === entry)
                {
                    this._table[index] = next;
                }
                else
                {
                    prev._next = next;
                }
                entry.recordRemoval(this);
                return entry;
            }
            prev = entry;
            entry = next;
        }
        if (entry === undefined)
        {
            return null;
        }
        return entry;
    }
    ,
    _removeMapping: function(/**Object*/ o)
    {
        if (!calitha.collections.util.isObjectInstanceOf(o, calitha.collections.imap.IEntry))
        {
            return null;
        }

        //noinspection UnnecessaryLocalVariableJS
        var entry = o;
        var key = entry.getKey();
        var hash = calitha.collections.util.hashCode(key);
        var index = this._indexFor(hash, this._table.length);
        var prev = this._table[index];
        var e = prev;

        while (e != null)
        {
            var next = e.getNext();
            if (e.getHash() === hash && e.equals(entry))
            {
                this._modCount++;
                this._size--;
                if (prev === e)
                {
                    this._table[index] = next;
                }
                else
                {
                    prev.setNext(next);
                }
                e.recordRemoval(this);
                return e;
            }
            prev = e;
            e = next;
        }
        return e;
    }
    ,
    _resize: function(/**Number*/ newCapacity)
    {
        var oldTable = this._table;
        var oldCapacity = oldTable.length;
        if (oldCapacity === calitha.collections.HashMap._MAXIMUM_CAPACITY)
        {
            this._threshold = Number.MAX_VALUE;
            return;
        }
        var newTable = new Array(newCapacity);
        this._transfer(newTable);
        this._table = newTable;
        this._threshold = Math.round(newCapacity * this._loadFactor);
    }
    ,
    _transfer: function(/**Array*/ newTable)
    {
        var src = this._table;
        var newCapacity = newTable.length;
        for (var j = 0; j < src.length; j++)
        {
            var entry = src[j];
            if (entry != null)
            {
                src[j] = null;
                do
                {
                    var next = entry.getNext();
                    var i = this._indexFor(entry.getHash(), newCapacity);
                    entry.setNext(newTable[i]);
                    newTable[i] = entry;
                    entry = next;
                } while (entry != null);
            }
        }
    }

});

calitha.collections.HashMap._DEFAULT_INITIAL_CAPACITY = 16;
calitha.collections.HashMap._MAXIMUM_CAPACITY = 1 << 30;
calitha.collections.HashMap._DEFAULT_LOAD_FACTOR = 0.75;

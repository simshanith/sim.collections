dojo.provide("calitha.collections.TreeMap");
dojo.require("calitha.collections.INavigableMap");
dojo.require("calitha.collections.AbstractMap");
dojo.require("calitha.collections.util");
dojo.require("calitha.collections.treemap.AscendingSubMap");
dojo.require("calitha.collections.treemap.DescendingSubMap");
dojo.require("calitha.collections.treemap.Entry");
dojo.require("calitha.collections.treemap.KeyIterator");
dojo.require("calitha.collections.treemap.KeySet");
dojo.require("calitha.collections.treemap.Values");
dojo.require("calitha.collections.IComparable");
dojo.require("calitha.collections.treemap.EntrySet");
dojo.require("calitha.collections.imap.ImmutableEntry");
dojo.require("calitha.exception.IllegalStateException");
dojo.require("calitha.exception.NullPointerException");
dojo.require("calitha.exception.IllegalArgumentException");

dojo.declare("calitha.collections.TreeMap", [calitha.collections.INavigableMap, calitha.collections.AbstractMap],
/** @lends calitha.collections.TreeMap# */
{
    /**
     * @constructs
     * @param comparator optional comparator
     * @extends calitha.collections.INavigableMap
     * @extends calitha.collections.AbstractMap
     * @description A Red-Black tree based NavigableMap implementation.
     * <p>This class is similar to the
     * <a href="http://java.sun.com/javase/6/docs/api/java/util/TreeMap.html">Java TreeMap class</a>
     * <p>This map needs a comparator object or function, or all elements must be IComparable.
     * Take a look at the comparator functions in the {@link calitha.collections} namespace.
     */
    constructor: function(/**(calitha.collections.IComparator|Function)?*/ comparator)
    {
        if (calitha.collections.util.isObjectInstanceOf(comparator, calitha.collections.IComparator))
        {
            this._comparator = comparator;
        }
        else if (calitha.collections.util.isObjectInstanceOf(comparator, Function))
        {
            this._comparator = new calitha.collections.base.Comparator(comparator);
        }
        else
        {
            this._comparator = null;
        }
        this._root = null;
        this._size = 0;
        this._modCount = 0;
        this._entrySet = null;
        this._navigableKeySet = null;
        this._descendingMap = null;
    }
    ,
    ceilingEntry: function(/**Object*/ key)
    {
        return this._exportEntry(this._getCeilingEntry(key));
    }
    ,
    ceilingKey: function(/**Object*/ key)
    {
        return this._keyOrNull(this._getCeilingEntry(key));
    }
    ,
    clear: function()
    {
        this._modCount++;
        this._size = 0;
        this._root = null;
    }
    ,
    comparator: function()
    {
        return this._comparator;
    }
    ,
    containsKey: function(/**Object*/ key)
    {
        return this._getEntry(key) != null;
    }
    ,
    containsValue: function(/**Object*/ value)
    {
        var entry = this._getFirstEntry();
        while (entry != null)
        {
            if (calitha.collections.util.equals(entry.value, value))
            {
                return true;
            }
            entry = this._successor(entry);
        }
        return false;
    }
    ,
    descendingKeySet: function()
    {
        return this.descendingMap().navigableKeySet();
    }
    ,
    descendingMap: function()
    {
        if (this._descendingMap === null)
        {
            this._descendingMap = new calitha.collections.treemap.DescendingSubMap(this, true, null, true, true, null, true);
        }
        return this._descendingMap;
    }
    ,
    entrySet: function()
    {
        if (this._entrySet === null)
        {
            this._entrySet = new calitha.collections.treemap.EntrySet(this);
        }
        return this._entrySet;
    }
    ,
    firstKey: function()
    {
        return this._key(this._getFirstEntry());
    }
    ,
    floorEntry: function(/**Object*/ key)
    {
        return this._exportEntry(this._getFloorEntry(key));
    }
    ,
    get: function(key)
    {
        var p = this._getEntry(key);
        return (p === null ? null : p.value);
    }
    ,
    headMap: function(/**Object*/ toKey, /**Boolean*/ inclusive)
    {
        return new calitha.collections.treemap.AscendingSubMap(this,
                                                             true,  null,  true,
                                                             false, toKey, inclusive);
    }
    ,
    higherEntry: function(/**Object*/ key)
    {
        return this._exportEntry(this._getHigherEntry(key));
    }
    ,
    keyIterator: function()
    {
        return new calitha.collections.treemap.KeyIterator(this, this._getFirstEntry());
    }
    ,
    keySet: function()
    {
        return this.navigableKeySet();
    }
    ,
    lastKey: function()
    {
        return this._key(this._getLastEntry());
    }
    ,
    lowerEntry: function(/**Object*/ key)
    {
        return this._exportEntry(this._getLowerEntry(key));
    }
    ,
    navigableKeySet: function()
    {
        if (this._navigableKeySet === null)
        {
            this._navigableKeySet = new calitha.collections.treemap.KeySet(this);
        }
        return this._navigableKeySet;
    }
    ,
    put: function(/**Object*/ key, /**Object*/ value)
    {
        if (this._root === null)
        {
            if (key === null)
            {
                throw new calitha.exception.NullPointerException(Error());
            }
            this._root = new calitha.collections.treemap.Entry(key, value, null);
            this._size = 1;
            this._modCount++;
            return null;
        }
        var node = this._root;
        var compare;
        var parent;

        // split comparator and comparable paths
        if (this._comparator != null)
        {
            do
            {
                parent = node;
                compare = this._comparator.compare(key, node.getKey());
                if (compare < 0)
                {
                    node = node.getLeft();
                }
                else if (compare > 0)
                {
                    node = node.getRight();
                }
                else
                {
                    return node.setValue(value);
                }
            } while (node != null);
        }
        else
        {
            if (!calitha.collections.util.isObjectInstanceOf(key, calitha.collections.IComparable))
            {
                throw new calitha.exception.IllegalArgumentException(Error("key must be IComparable"));
            }
            do
            {
                parent = node;
                compare = key.compareTo(node.getKey());
                if (compare < 0)
                {
                    node = node.getLeft();
                }
                else if (compare > 0)
                {
                    node = node.getRight();
                }
                else
                {
                    return node.setValue(value);
                }
            } while (node != null);
        }
        var entry = new calitha.collections.treemap.Entry(key, value, parent);
        if (compare < 0)
        {
            parent.setLeft(entry);
        }
        else
        {
            parent.setRight(entry);
        }
        this._fixAfterInsertion(entry);
        this._size++;
        this._modCount++;
        return null;
    }
    ,
    remove: function(/**Object*/ key)
    {
        var node = this._getEntry(key);
        if (node === null)
        {
            return null;
        }

        var oldValue = node.getValue();
        this._deleteEntry(node);
        return oldValue;
    },
    size: function()
    {
        return this._size;
    }
    ,
    subMap: function(/**Object*/ fromKey, /**Boolean*/ fromInclusive, /**Object*/ toKey, /**Boolean*/ toInclusive)
    {
        return new calitha.collections.treemap.AscendingSubMap(this,
                                                             false, fromKey, fromInclusive,
                                                             false, toKey, toInclusive);
    }
    ,
    tailMap: function(/**Object*/ fromKey, /**Boolean*/ inclusive)
    {
        return new calitha.collections.treemap.AscendingSubMap(this,
                                                             false, fromKey, inclusive,
                                                             true, null, true);
    }
    ,
    values: function() 
    {
        if (this._values === null)
        {
            this._values = new calitha.collections.treemap.Values(this);
        }
        return this._values;
    }
    ,
    _colorOf: function(/**calitha.collections.treemap.Entry*/ node)
    {
        return (node === null ? calitha.collections.TreeMap._BLACK : node.getColor());
    }
    ,
    _compare: function(/**Object*/ k1, /**Object*/ k2)
    {
        if (this._comparator === null)
        {
            if ((!calitha.collections.util.isObjectInstanceOf(k1, calitha.collections.IComparable)) || (!calitha.collections.util.isObjectInstanceOf(k2, calitha.collections.IComparable)))
            {
                throw new calitha.exception.IllegalStateException(Error("No comparator available. Therefore key must be an IComparable instance."));
            }
            return k1.compareTo(k2);
        }
        else
        {
            return this._comparator.compare(k1, k2);
        }
    }
    ,
    _deleteEntry:function(/**calitha.collections.treemap.Entry*/ node)
    {
        var BLACK = calitha.collections.TreeMap._BLACK;

        this._modCount++;
        this._size--;

        // If strictly internal, copy successor's element to node and then make node
        // point to successor.
        if (node.getLeft() != null && node.getRight() != null)
        {
            var s = this._successor(node);
            node.setKey(s);
            node.setValue(s.getValue());
            node = s;
        } // node has 2 children

        // Start fixup at replacement node, if it exists.
        var replacement = (node.getLeft() != null ? node.getLeft() : node.getRight());

        if (replacement != null)
        {
            // Link replacement to parent
            replacement.setParent(node.getParent());
            if (node.getParent() === null)
            {
                this._root = replacement;
            }
            else if (node === node.getParent().getLeft())
            {
                node.getParent().getLeft()  = replacement;
            }
            else
            {
                node.getParent().getRight() = replacement;
            }

            // Null out links so they are OK to use by fixAfterDeletion.
            node.setLeft(null);
            node.setRight(null);
            node.setParent(null);

            // Fix replacement
            if (node.getColor() === BLACK)
            {
                this._fixAfterDeletion(replacement);
            }
        }
        else if (node.getParent() === null)
        { // return if we are the only node.
            this._root = null;
        }
        else
        { //  No children. Use self as phantom replacement and unlink.
            if (node.getColor() === BLACK)
            {
                this._fixAfterDeletion(node);
            }

            if (node.getParent() != null)
            {
                if (node === node.getParent().getLeft())
                {
                    node.getParent().setLeft(null);
                }
                else if (node === node.getParent().getRight())
                {
                    node.getParent().setRight(null);
                }
                node.setParent(null);
            }
        }
    }
    ,
    _exportEntry: function(/**calitha.collections.treemap.Entry*/ entry)
    {
        return entry === null ? null : calitha.collections.imap.ImmutableEntry.newInstance(entry);
    }
    ,
    _fixAfterDeletion: function(/**calitha.collections.treemap.Entry*/ x)
    {
        var BLACK = calitha.collections.TreeMap._BLACK;
        var RED = calitha.collections.TreeMap._RED;

        var sib;
        while (x != this._root && this._colorOf(x) === BLACK)
        {
            if (x === this._leftOf(this._parentOf(x)))
            {
                sib = this._rightOf(this._parentOf(x));

                if (this._colorOf(sib) === RED)
                {
                    this._setColor(sib, BLACK);
                    this._setColor(this._parentOf(x), RED);
                    this._rotateLeft(this._parentOf(x));
                    sib = this._rightOf(this._parentOf(x));
                }

                if (this._colorOf(this._leftOf(sib))  === BLACK &&
                    this._colorOf(this._rightOf(sib)) === BLACK)
                {
                    this._setColor(sib, RED);
                    x = this._parentOf(x);
                }
                else
                {
                    if (this._colorOf(this._rightOf(sib)) === BLACK)
                    {
                        this._setColor(this._leftOf(sib), BLACK);
                        this._setColor(sib, RED);
                        this._rotateRight(sib);
                        sib = this._rightOf(this._parentOf(x));
                    }
                    this._setColor(sib, this._colorOf(this._parentOf(x)));
                    this._setColor(this._parentOf(x), BLACK);
                    this._setColor(this._rightOf(sib), BLACK);
                    this._rotateLeft(this._parentOf(x));
                    x = this._root;
                }
            }
            else
            { // symmetric
                sib = this._leftOf(this._parentOf(x));

                if (this._colorOf(sib) === RED)
                {
                    this._setColor(sib, BLACK);
                    this._setColor(this._parentOf(x), RED);
                    this._rotateRight(this._parentOf(x));
                    sib = this._leftOf(this._parentOf(x));
                }

                if (this._colorOf(this._rightOf(sib)) === BLACK &&
                    this._colorOf(this._leftOf(sib)) === BLACK)
                {
                    this._setColor(sib, RED);
                    x = this._parentOf(x);
                }
                else
                {
                    if (this._colorOf(this._leftOf(sib)) === BLACK)
                    {
                        this._setColor(this._rightOf(sib), BLACK);
                        this._setColor(sib, RED);
                        this._rotateLeft(sib);
                        sib = this._leftOf(this._parentOf(x));
                    }
                    this._setColor(sib, this._colorOf(this._parentOf(x)));
                    this._setColor(this._parentOf(x), BLACK);
                    this._setColor(this._leftOf(sib), BLACK);
                    this._rotateRight(this._parentOf(x));
                    x = this._root;
                }
            }
        }

        this._setColor(x, BLACK);
    }
    ,
    _fixAfterInsertion: function(/**calitha.collections.treemap.Entry*/ x)
    {
        var BLACK = calitha.collections.TreeMap._BLACK;
        var RED = calitha.collections.TreeMap._RED;
        x.setColor(RED);
        var y;
        while (x != null && x != this._root && x.getParent().getColor() === RED)
        {
            if (this._parentOf(x) === this._leftOf(this._parentOf(this._parentOf(x))))
            {
                y = this._rightOf(this._parentOf(this._parentOf(x)));
                if (this._colorOf(y) === RED)
                {
                    this._setColor(this._parentOf(x), BLACK);
                    this._setColor(y, BLACK);
                    this._setColor(this._parentOf(this._parentOf(x)), RED);
                    x = this._parentOf(this._parentOf(x));
                }
                else
                {
                    if (x === this._rightOf(this._parentOf(x)))
                    {
                        x = this._parentOf(x);
                        this._rotateLeft(x);
                    }
                    this._setColor(this._parentOf(x), BLACK);
                    this._setColor(this._parentOf(this._parentOf(x)), RED);
                    this._rotateRight(this._parentOf(this._parentOf(x)));
                }
            }
            else
            {
                y = this._leftOf(this._parentOf(this._parentOf(x)));
                if (this._colorOf(y) === RED)
                {
                    this._setColor(this._parentOf(x), BLACK);
                    this._setColor(y, BLACK);
                    this._setColor(this._parentOf(this._parentOf(x)), RED);
                    x = this._parentOf(this._parentOf(x));
                }
                else
                {
                    if (x === this._leftOf(this._parentOf(x)))
                    {
                        x = this._parentOf(x);
                        this._rotateRight(x);
                    }
                    this._setColor(this._parentOf(x), BLACK);
                    this._setColor(this._parentOf(this._parentOf(x)), RED);
                    this._rotateLeft(this._parentOf(this._parentOf(x)));
                }
            }
        }
        this._root.color = BLACK;
    }
    ,
    _getCeilingEntry: function(/**Object*/ key)
    {
        var p = this._root;
        while (p != null)
        {
            var cmp = this._compare(key, p.key);
            if (cmp < 0)
            {
                if (p.left != null)
                {
                    p = p.left;
                }
                else
                {
                    return p;
                }
            }
            else if (cmp > 0)
            {
                if (p.right != null)
                {
                    p = p.right;
                }
                else
                {
                    var parent = p.parent;
                    var ch = p;
                    while (parent != null && ch === parent.right)
                    {
                        ch = parent;
                        parent = parent.parent;
                    }
                    return parent;
                }
            }
            else
            {
                return p;
            }
        }
        return null;
    }
    ,
    _getEntry: function(/**Object*/ key)
    {
        // Offload comparator-based version for sake of performance
        if (this._comparator != null)
        {
            return this._getEntryUsingComparator(key);
        }
        if (key === null)
        {
            throw new calitha.exception.NullPointerException(Error());
        }
        var p = this._root;
        while (p != null)
        {
            var cmp = key.compareTo(p.key);
            if (cmp < 0)
            {
                p = p.left;
            }
            else if (cmp > 0)
            {
                p = p.right;
            }
            else
            {
                return p;
            }
        }
        return null;
    }
    ,
    _getEntryUsingComparator: function(/**Object*/ key)
    {
        if (this._comparator != null)
        {
            var p = this._root;
            while (p != null)
            {
                var cmp = this._comparator.compare(key, p.key);
                if (cmp < 0)
                {
                    p = p.left;
                }
                else if (cmp > 0)
                {
                    p = p.right;
                }
                else
                {
                    return p;
                }
            }
        }
        return null;
    }
    ,
    _getFirstEntry: function()
    {
        var p = this._root;
        if (p != null)
        {
            while (p.left != null)
            {
                p = p.left;
            }
        }
        return p;
    }
    ,
    _getFloorEntry: function(/**Object*/ key)
    {
        var p = this._root;
        while (p != null)
        {
            var cmp = this._compare(key, p.key);
            if (cmp > 0)
            {
                if (p.right != null)
                {
                    p = p.right;
                }
                else
                {
                    return p;
                }
            }
            else if (cmp < 0)
            {
                if (p.left != null)
                {
                    p = p.left;
                }
                else
                {
                    var parent = p.parent;
                    var ch = p;
                    while (parent != null && ch === parent.left)
                    {
                        ch = parent;
                        parent = parent.parent;
                    }
                    return parent;
                }
            }
            else
            {
                return p;
            }
        }
        return null;
    }
    ,
    _getHigherEntry: function(/**Object*/ key)
    {
        var p = this._root;
        while (p != null)
        {
            var cmp = this._compare(key, p.key);
            if (cmp < 0)
            {
                if (p.left != null)
                {
                    p = p.left;
                }
                else
                {
                    return p;
                }
            }
            else
            {
                if (p.right != null)
                {
                    p = p.right;
                }
                else
                {
                    var parent = p.parent;
                    var ch = p;
                    while (parent != null && ch === parent.right)
                    {
                        ch = parent;
                        parent = parent.parent;
                    }
                    return parent;
                }
            }
        }
        return null;
    }
    ,
    _getLastEntry: function()
    {
        var p = this._root;
        if (p != null)
        {
            while (p.right != null)
            {
                p = p.right;
            }
        }
        return p;
    }
    ,
    _getLowerEntry: function(/**Object*/ key)
    {
        var p = this._root;
        while (p != null)
        {
            var cmp = this._compare(key, p.key);
            if (cmp > 0)
            {
                if (p.right != null)
                {
                    p = p.right;
                }
                else
                {
                    return p;
                }
            }
            else
            {
                if (p.left != null)
                {
                    p = p.left;
                }
                else
                {
                    var parent = p.parent;
                    var ch = p;
                    while (parent != null && ch === parent.left)
                    {
                        ch = parent;
                        parent = parent.parent;
                    }
                    return parent;
                }
            }
        }
        return null;
    }
    ,
    _key: function(/**calitha.collections.treemap.Entry*/ entry)
    {
        if (entry === null)
        {
            throw new calitha.exception.NoSuchElementException(Error());
        }
        return entry.getKey();
    }
    ,
    _keyOrNull: function(/**calitha.collections.treemap.Entry*/ entry)
    {
        return entry === null? null : entry.getKey();
    }
    ,
    _leftOf: function(/**calitha.collections.treemap.Entry*/ node)
    {
        return (node === null) ? null: node.getLeft();
    }
    ,
    _parentOf: function(/**calitha.collections.treemap.Entry*/ node)
    {
        return (node === null ? null: node.getParent());
    }
    ,
    _predecessor: function(/**calitha.collections.treemap.Entry*/ t)
    {
        var p;
        if (t === null)
        {
            return null;
        }
        else if (t.getLeft() != null)
        {
            p = t.getLeft();
            while (p.getRight() != null)
            {
                p = p.getRight();
            }
            return p;
        }
        else
        {
            p = t.getParent();
            var ch = t;
            while (p != null && ch === p.getLeft())
            {
                ch = p;
                p = p.getParent();
            }
            return p;
        }
    }
    ,
    _rightOf: function(/**calitha.collections.treemap.Entry*/ node)
    {
        return (node === null) ? null: node.getRight();
    }
    ,
    _rotateLeft: function(/**calitha.collections.treemap.Entry*/ node)
    {
        if (node != null)
        {
            var rightNode = node.getRight();
            node.setRight(rightNode.getLeft());
            if (rightNode.getLeft() != null)
            {
                rightNode.getLeft().setParent(node);
            }
            rightNode.setParent(node.getParent());
            if (node.getParent() === null)
            {
                this._root = rightNode;
            }
            else if (node.getParent().getLeft() === node)
            {
                node.getParent().setLeft(rightNode);
            }
            else
            {
                node.getParent().setRight(rightNode);
            }
            rightNode.setLeft(node);
            node.setParent(rightNode);
        }
    }
    ,
    _rotateRight: function(/**calitha.collections.treemap.Entry*/ node)
    {
        if (node != null)
        {
            var leftNode = node.getLeft();
            node.setLeft(leftNode.getRight());
            if (leftNode.getRight() != null)
            {
                leftNode.getRight().setParent(node);
            }
            leftNode.setParent(node.getParent());
            if (node.getParent() === null)
            {
                this._root = leftNode;
            }
            else if (node.getParent().getRight() === node)
            {
                node.getParent().setRight(leftNode);
            }
            else
            {
                node.getParent().setLeft(leftNode);
            }
            leftNode.setRight(node);
            node.setParent(leftNode);
        }
    }
    ,
    _setColor: function(/**calitha.collections.treemap.Entry*/ node, /**Number*/ color)
    {
        if (node != null)
        {
	        node.setColor(color);
        }
    }
    ,
    _successor: function(/**calitha.collections.treemap.Entry*/ node)
    {
        if (node === null)
        {
            return null;
        }
        else if (node.getRight() != null)
        {
            node = node.getRight();
            while (node.getLeft() != null)
            {
                node = node.getLeft();
            }
            return node;
        }
        else
        {
            var parent = node.getParent();
            while (parent != null && node === parent.getRight())
            {
                node = parent;
                parent = parent.getParent();
            }
            return parent;
        }
    }
    
});

calitha.collections.TreeMap._RED = false;
calitha.collections.TreeMap._BLACK = true;

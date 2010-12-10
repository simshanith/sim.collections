dojo.provide("calitha.collections.tests.CollectionTest");
dojo.require("calitha.collections.tests.Test");
dojo.require("calitha.exception.VirtualFunctionException");

dojo.declare("calitha.collections.tests.CollectionTest", calitha.collections.tests.Test,
{
    newCollectionOfNumbers: function() {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    testAddAllReturnsTrue: function(t)
    {
        var collection = this.newCollectionOfNumbers();
        collection.add(1);
        collection.add(1);
        collection.add(2);
        collection.add(2);

        var otherCollection = this.newCollectionOfNumbers();
        t.assertTrue(otherCollection.addAll(collection), "collection must be modified");
    }
    ,
    testClearMustResultInEmptyCollection: function(t)
    {
        var collection = this.newCollectionOfNumbers();
        collection.add(1);
        collection.add(2);
        collection.add(3);
        collection.clear();
        t.assertTrue(collection.isEmpty(), "collection must be empty");
    }
    ,
    testContainsMustReturnTrueForItemsInCollection: function(t)
    {
        var collection = this.newCollectionOfNumbers();
        collection.add(1);
        collection.add(2);
        collection.add(3);
        t.assertTrue(collection.contains(1), "1 is in collection, so must return true");
        t.assertTrue(collection.contains(2), "2 is in collection, so must return true");
        t.assertTrue(collection.contains(3), "3 is in collection, so must return true");
    }
    ,
    // overriden in TreeSet, because comparator is only for numbers
    testContainsMustReturnFalseForItemsNotInCollection: function(t)
    {
        var collection = this.newCollectionOfNumbers();
        collection.add(1);
        collection.add(2);
        collection.add(3);
        t.assertFalse(collection.contains(4), "4 is not in collection, so must return false");
        t.assertFalse(collection.contains({}), "{} is not in collection, so must return false");
        t.assertFalse(collection.contains("dojo"), "'dojo' is not in collection, so must return false");
    }
    ,
    testContainsAllMustReturnTrueWhenAllItemsInCollection: function(t)
    {
        var collection = this.newCollectionOfNumbers();
        collection.add(1);
        collection.add(2);
        collection.add(3);
        var otherCollection = this.newCollectionOfNumbers();
        otherCollection.addAll(collection);
        t.assertTrue(collection.containsAll(otherCollection), "all items are be present, so must return true");
    }
    ,
    testContainsAllMustReturnFalseWhenSomeItemsInCollection: function(t)
    {
        var collection = this.newCollectionOfNumbers();
        collection.add(1);
        collection.add(2);
        var otherCollection = this.newCollectionOfNumbers();
        otherCollection.addAll(collection);
        otherCollection.add(3);
        t.assertFalse(collection.containsAll(otherCollection), "only some items are present, so must return false");
    }
    ,
    testForEachIsCalledWithEachItem: function(t)
    {
        var collection = this.newCollectionOfNumbers();
        collection.add(1);
        collection.add(2);
        collection.add(3);
        var forEachCollection = this.newCollectionOfNumbers();
        collection.forEach(function(item)
        {
            forEachCollection.add(item);
        });
        t.assertTrue(collection.equals(forEachCollection), "all items in forEach must give the same collection");
    }
    ,
    testNewCollectionMustBeEmpty: function(t)
    {
        var collection = this.newCollectionOfNumbers();
        t.assertTrue(collection.isEmpty(), "new collection must be empty");
    }
    ,
    testAddAndRemoveGivesEmptyCollection: function(t)
    {
        var collection = this.newCollectionOfNumbers();
        collection.add(1);
        collection.remove(1);
        t.assertTrue(collection.isEmpty(), "collection must be empty");
    }
    ,
    testCollectionNotEmptyAfterAdd: function(t)
    {
        var collection = this.newCollectionOfNumbers();
        collection.add(1);
        t.assertFalse(collection.isEmpty(), "collection not empty after add");
    }
    ,
    testRemoveContainedItemReturnsTrue: function(t)
    {
        var collection = this.newCollectionOfNumbers();
        collection.add(1);
        collection.add(2);
        collection.add(3);
        t.assertTrue(collection.remove(2), "collection contains 2, thus must return true");
    }
    ,
    testRemoveNotContainedItemReturnsFalse: function(t)
    {
        var collection = this.newCollectionOfNumbers();
        collection.add(1);
        collection.add(2);
        collection.add(3);
        t.assertFalse(collection.remove(4), "collection does not contain 4, thus must return false");
    }
    ,
    testRemoveAllWithSomeContainedItemsMustReturnModified: function(t)
    {
        var collection = this.newCollectionOfNumbers();
        collection.add(1);
        collection.add(2);
        collection.add(3);
        var otherCollection = this.newCollectionOfNumbers();
        otherCollection.add(1);
        otherCollection.add(3);
        otherCollection.add(4);
        t.assertTrue(collection.removeAll(otherCollection), "collection must be modified by removing some contained items");
    }
    ,
    testRemoveAllWithNoContainedItemsMustReturnNotModified: function(t)
    {
        var collection = this.newCollectionOfNumbers();
        collection.add(1);
        collection.add(2);
        collection.add(3);
        var otherCollection = this.newCollectionOfNumbers();
        otherCollection.add(5);
        otherCollection.add(6);
        t.assertFalse(collection.removeAll(otherCollection), "collection must not be modified by removing no contained items");
    }
    ,
    testRetainAllWithSomeContainedItemsMustReturnModified: function(t)
    {
        var collection = this.newCollectionOfNumbers();
        collection.add(1);
        collection.add(2);
        collection.add(3);
        var otherCollection = this.newCollectionOfNumbers();
        otherCollection.add(2);
        otherCollection.add(3);
        otherCollection.add(4);

        t.assertTrue(collection.retainAll(otherCollection), "collection must be modified, when not all items are retained");
    }
    ,
    testRetainAllWithAllItemsMustReturnNotModified: function(t)
    {
        var collection = this.newCollectionOfNumbers();
        collection.add(1);
        collection.add(2);
        collection.add(3);
        var otherCollection = this.newCollectionOfNumbers();
        otherCollection.add(4);
        otherCollection.add(3);
        otherCollection.add(2);
        otherCollection.add(1);

        t.assertFalse(collection.retainAll(otherCollection), "collection must not be modified, when all items are retained");
    }
    ,
    testSizeOfEmptyListMustBeZero: function(t)
    {
        var collection = this.newCollectionOfNumbers();
        t.assertEqual(0, collection.size(), "size must be 0");
    }
    ,
    testSizeOfListWith1000AddedMustBe1000: function(t)
    {
        var collection = this.newCollectionOfNumbers();
        for (var i = 0; i < 1000; i++)
        {
            collection.add(i);
        }
        t.assertEqual(1000, collection.size(), "size must be 1000");
    }
    ,
    testCollectionToArray: function(t)
    {
        var collection = this.newCollectionOfNumbers();
        for (var i = 0; i < 1000; i++)
        {
            collection.add(i);
        }
        var array = collection.toArray();
        for (var j = 0; j < 1000; j++)
        {
            t.assertTrue(collection.contains(j), "collection must contain " + j);
        }
    }


});

dojo.provide("calitha.collections.tests.ListTest");
dojo.require("calitha.collections.tests.CollectionTest");
dojo.require("calitha.exception.VirtualFunctionException");

dojo.declare("calitha.collections.tests.ListTest", calitha.collections.tests.CollectionTest,
{
    newList: function() {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    newCollectionOfNumbers: function()
    {
        return this.newList();
    }
    ,
    testAddAlwaysReturnsTrue: function(t)
    {
        var list = this.newList();
        t.assertTrue(list.add(1), "adding a new object to a list must return true");
        t.assertTrue(list.add(1), "adding an old object to a list must return true");
        t.assertTrue(list.add(null), "adding a new null object to a list must return true");
        t.assertTrue(list.add(null), "adding an old null object to a list must return true");
    }
    ,
    testListsWithItemsInSameOrderMustBeEqual: function(t)
    {
        var list1 = this.newList();
        list1.add(1);
        list1.add(null);
        list1.add("test");
        var list2 = this.newList();
        list2.add(1);
        list2.add(null);
        list2.add("test");

        t.assertTrue(list1.equals(list2), "lists with items in same order must be equal");
    }
    ,
    testListsWithItemsInDifferentOrderMustNotBeEqual: function(t)
    {
        var list1 = this.newList();
        list1.add(1);
        list1.add(null);
        list1.add("test");
        var list2 = this.newList();
        list2.add("test");
        list2.add(1);
        list2.add(null);

        t.assertFalse(list1.equals(list2), "lists with items in different order must not be equal");
    }
    ,
    testListToArray: function(t)
    {
        var list = this.newList();
        for (var i = 0; i < 1000; i++)
        {
            list.add(i);
        }
        var array = list.toArray();
        for (var j = 0; j < 1000; j++)
        {
            t.assertEqual(j, array[j]);
        }
    }
    ,
    testAddAndGet1000Strings: function(t)
    {
        var list = this.newList();
        for (var add_index = 0; add_index < 1000; add_index++)
        {
            t.assertTrue(list.add("" + add_index));
        }
        for (var get_index = 0; get_index < 1000; get_index++)
        {
            t.assertEqual("" + get_index, list.get(get_index));
        }
    }
    ,
    testInsertAll: function(t)
    {
        var list = this.newList();
        list.add(0);
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(8);
        list.add(9);
        var list2 = this.newList();
        list2.add(4);
        list2.add(5);
        list2.add(6);
        list2.add(7);
        list.insertAll(4, list2);
        for (var i = 0; i < 10; i ++)
        {
            t.assertEqual(i, list.get(i), "List must be [0,1,2,3,4,5,6,8,9]");
        }
    }
    ,
    testAddAndDelGivesEmptyList: function(t)
    {
        var list = this.newList();
        list.add(5);
        list.del(0);
        t.assertTrue(list.isEmpty(), "list must be empty");
    }
    ,
    testDelReturnsOldItem: function(t)
    {
        var list = this.newList();
        list.add(25);
        list.add(13);
        list.add(99);
        t.assertEqual(13, list.del(1), "13 is added 2nd, therefore result must be 13");
        t.assertEqual(2, list.size(), "2 items must remain in the list");
    }
    ,
    testDelThrowsIndexOutOfBoundsException: function(t)
    {
        var list = this.newList();
        list.add(25);
        list.add(13);
        list.add(99);
        try
        {
            list.del(4);
        }
        catch (e)
        {
            t.assertTrue(e instanceof calitha.exception.IndexOutOfBoundsException,
                         "deleting item 4 in a list of 3 items must throw IndexOutOfBoundsException");
        }
    }
    ,
    testIndexOfReturnsIndexOfContainedItem: function(t)
    {
        var list = this.newList();
        list.add(25);
        list.add(13);
        list.add(99);
        t.assertEqual(1, list.indexOf(13), "index of 13 must be 1");
    }
    ,
    testIndexOfReturnsMin1ForUnknownItem: function(t)
    {
        var list = this.newList();
        list.add(25);
        list.add(13);
        list.add(99);
        t.assertEqual(-1, list.indexOf(666), "666 is unknown, thus returns -1");
    }
    ,
    testInsertBetweenTwoItems: function(t)
    {
        var list = this.newList();
        list.add(25);
        list.add(99);
        list.insert(1, 13);
        t.assertEqual(1, list.indexOf(13), "index of 13 must be 1");
    }
    ,
    testLastIndexOfReturnsIndexOfContainedItem: function(t)
    {
        var list = this.newList();
        list.add(25);
        list.add(13);
        list.add(99);
        list.add(13);
        list.add(99);
        list.add(13);
        list.add(99);
        t.assertEqual(5, list.lastIndexOf(13), "last index of 13 must be 5");
    }
    ,
    testLastIndexOfReturnsMin1ForUnknownItem: function(t)
    {
        var list = this.newList();
        list.add(25);
        list.add(13);
        list.add(99);
        t.assertEqual(-1, list.lastIndexOf(666), "666 is unknown, thus returns -1");
    }

});

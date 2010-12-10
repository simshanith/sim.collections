dojo.provide("calitha.collections.tests.SetTest");
dojo.require("calitha.collections");
dojo.require("calitha.collections.tests.CollectionTest");
dojo.require("calitha.exception.VirtualFunctionException");

dojo.declare("calitha.collections.tests.SetTest", calitha.collections.tests.CollectionTest,
{
    constructor: function()
    {
        calitha.collections.makeNumberHashCompatible(Number.prototype);
    }
    ,
    newSetOfNumbers: function() {throw new calitha.exception.VirtualFunctionException(Error());}
    ,
    newCollectionOfNumbers: function()
    {
        return this.newSetOfNumbers();
    }
    ,
    testAddReturnsTrueForNewItems: function(t)
    {
        var set = this.newSetOfNumbers();
        t.assertTrue(set.add(1), "adding a new object to a set must return true");
        t.assertTrue(set.add(2), "adding a new object to a set must return true");
        t.assertTrue(set.add(3), "adding a new object to a set must return true");
    }
    ,
    testAddReturnsFalseForOldItems: function(t)
    {
        var set = this.newSetOfNumbers();
        set.add(1);
        t.assertFalse(set.add(1), "adding an old object to a set must return false");
    }
    ,
    testSetWithItemsInDifferentOrderMustBeEqual: function(t)
    {
        var set1 = this.newSetOfNumbers();
        set1.add(1);
        set1.add(2);
        set1.add(3);
        var set2 = this.newSetOfNumbers();
        set2.add(1);
        set2.add(3);
        set2.add(2);

        t.assertTrue(set1.equals(set2), "sets with items in different order must be equal");
    }

});

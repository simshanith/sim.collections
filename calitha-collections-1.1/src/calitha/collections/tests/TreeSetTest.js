dojo.provide("calitha.collections.tests.TreeSetTest");
dojo.require("calitha.collections.tests.SetTest");
dojo.require("calitha.collections.TreeSet");

dojo.declare("calitha.collections.tests.TreeSetTest", calitha.collections.tests.SetTest,
{
    newSetOfNumbers: function()
    {
        return new calitha.collections.TreeSet(calitha.collections.numberComparator());
    }
    ,
    // override from CollectionTest
    testContainsMustReturnFalseForItemsNotInCollection: function(t)
    {
        var collection = this.newCollectionOfNumbers();
        collection.add(1);
        collection.add(2);
        collection.add(3);
        t.assertFalse(collection.contains(4), "4 is not in collection, so must return false");
    }
});

/*
dojo.provide("calitha.collections.tests.TreeSetTest");
dojo.require("calitha.collections.TreeSet");
dojo.require("calitha.collections.tests.Employee");
dojo.require("calitha.collections.tests.EmployeeComparator");

tests.register("calitha.collections.tests.TreeSetTest",
[

    function testAdd1000Employees(t)
    {
        var set = new calitha.collections.TreeSet(new calitha.collections.tests.EmployeeComparator());
        for (var i = 0; i < 1000; i++)
        {
            var employee = new calitha.collections.tests.Employee(i, "first" + i, "last" + i);
            t.assertEqual(true, set.add(employee));
        }
    }
]);
*/

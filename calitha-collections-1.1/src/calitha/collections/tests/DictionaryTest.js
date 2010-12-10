dojo.provide("calitha.collections.tests.DictionaryTest");
dojo.require("calitha.collections.tests.MapTest");
dojo.require("calitha.collections.Dictionary");

dojo.declare("calitha.collections.tests.DictionaryTest", calitha.collections.tests.MapTest,
{
    newMapNumberKey: function()
    {
        return new calitha.collections.Dictionary();
    }
});


/*
dojo.provide("calitha.collections.tests.DictionaryTest");
dojo.require("calitha.collections.Dictionary");
dojo.require("calitha.collections.tests.Employee");

tests.register("calitha.collections.tests.DictionaryTest",
[

    function testPutAndGet1000Employees(t)
    {
        var map = new calitha.collections.Dictionary();
        for (var i = 0; i < 1000; i++)
        {
            var employee = new calitha.collections.tests.Employee(i, "first" + i, "last" + i);
            t.assertEqual(null, map.put(employee.getCode(), employee));
        }
        for (var j = 0; j < 1000; j++)
        {
            t.assertEqual(j, map.get(j).getCode());
        }
    }
]);
*/

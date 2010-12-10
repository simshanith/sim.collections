dojo.provide("calitha.collections.tests.HashMapTest");
dojo.require("calitha.collections.tests.MapTest");
dojo.require("calitha.collections.HashMap");

dojo.declare("calitha.collections.tests.HashMapTest", calitha.collections.tests.MapTest,
{
    newMapNumberKey: function()
    {
        return new calitha.collections.HashMap();
    }
    ,
    testPutNullInEmptyMap: function(t)
    {
        var map = this.newMapNumberKey();
        t.assertFalse(map.containsKey(null));
        t.assertEqual(null, map.put(null));
        t.assertTrue(map.containsKey(null));
        t.assertEqual(null, map.get(null));
    }
});

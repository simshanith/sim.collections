dojo.provide("calitha.collections.tests.HashSetTest");
dojo.require("calitha.collections.tests.SetTest");
dojo.require("calitha.collections.HashSet");

dojo.declare("calitha.collections.tests.HashSetTest", calitha.collections.tests.SetTest,
{
    constructor: function()
    {
        calitha.collections.makeStringHashCompatible(String.prototype);
    }
    ,
    newSetOfNumbers: function()
    {
        return new calitha.collections.HashSet();
    }
    ,
    newSet: function()
    {
        return new calitha.collections.HashSet();
    }
    ,
    testAddNullInEmptySet: function(t)
    {
        var set = this.newSet();
        t.assertFalse(set.contains(null));
        t.assertTrue(set.add(null));
        t.assertTrue(set.contains(null));
    }
    ,
    testContainsStringKey: function(t)
    {
        var set = this.newSet();
        t.assertFalse(set.contains("key"), "set must not contain key");
        set.add("key");
        t.assertTrue(set.contains("key"), "set must contain key");
    }
    
});

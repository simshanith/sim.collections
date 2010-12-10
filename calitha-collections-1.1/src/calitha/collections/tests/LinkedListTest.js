dojo.provide("calitha.collections.tests.LinkedListTest");
dojo.require("calitha.collections.tests.ListTest");
dojo.require("calitha.collections.LinkedList");

dojo.declare("calitha.collections.tests.LinkedListTest", calitha.collections.tests.ListTest,
{
    newList: function()
    {
        return new calitha.collections.LinkedList();
    }
});

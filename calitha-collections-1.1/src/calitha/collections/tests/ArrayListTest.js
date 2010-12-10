dojo.provide("calitha.collections.tests.ArrayListTest");
dojo.require("calitha.collections.tests.ListTest");
dojo.require("calitha.collections.ArrayList");

dojo.declare("calitha.collections.tests.ArrayListTest", calitha.collections.tests.ListTest,
{
    newList: function()
    {
        return new calitha.collections.ArrayList();
    }

});

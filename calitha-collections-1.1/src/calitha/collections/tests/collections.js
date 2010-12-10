dojo.provide("calitha.collections.tests.collections");
dojo.require("calitha.collections");
dojo.require("calitha.collections.tests.ArrayListTest");
dojo.require("calitha.collections.tests.LinkedListTest");
dojo.require("calitha.collections.tests.HashMapTest");
dojo.require("calitha.collections.tests.TreeMapTest");
dojo.require("calitha.collections.tests.TreeSetTest");
dojo.require("calitha.collections.tests.HashSetTest");
dojo.require("calitha.collections.tests.DictionaryTest");

try
{
    new calitha.collections.tests.ArrayListTest().register();
    new calitha.collections.tests.LinkedListTest().register();
    new calitha.collections.tests.HashMapTest().register();
    new calitha.collections.tests.TreeMapTest().register();
    new calitha.collections.tests.TreeSetTest().register();
    new calitha.collections.tests.HashSetTest().register();
    new calitha.collections.tests.DictionaryTest().register();
}
catch(e)
{
	doh.debug(e);
}

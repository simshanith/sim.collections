dojo.provide("calitha.collections.tests.TreeMapTest");
dojo.require("calitha.collections.tests.MapTest");
dojo.require("calitha.collections.TreeMap");
dojo.require("calitha.collections.tests.Employee");

dojo.declare("calitha.collections.tests.TreeMapTest", calitha.collections.tests.MapTest,
{
    newMapNumberKey: function()
    {
        return new calitha.collections.TreeMap(calitha.collections.numberComparator());
    }
    ,
    newMapStringKey: function()
    {
        return new calitha.collections.TreeMap(calitha.collections.stringComparator());
    }
    ,
    get30UnorderedNumberKeys: function()
    {
        return [
                3,
                12,
                20,
                5,
                4,
                30,
                22,
                13,
                7,
                8,
                23,
                9,
                24,
                10,
                11,
                17,
                16,
                21,
                28,
                29,
                1,
                14,
                25,
                2,
                19,
                18,
                15,
                6,
                26,
                27
                ];
    }
    ,
    get10UnorderedStringKeys: function()
    {
        return [
                "war_9",
                "rra_7",
                "blaaaa_4",
                "aab_2",
                "foo_6",
                "acc_3",
                "blaah_5",
                "xxx_10",
                "test_8",
                "a_1"
                ];
    }
    ,
    newMapWith30UnorderedNumbers: function()
    {
        var map = this.newMapNumberKey();
        var keys = this.get30UnorderedNumberKeys();
        for (i = 0; i < keys.length; i ++)
        {
            var key = keys[i];
            var value = "" + keys[i];
            map.put(key, value);
        }
        return map;
    }
    ,
    newMapWith10UnorderedStrings: function()
    {
        var map = this.newMapStringKey();
        var keys = this.get10UnorderedStringKeys();
        for (i = 0; i < keys.length; i ++)
        {
            var key = keys[i];
            var value = keys[i] + "_value";
            map.put(key, value);
        }
        return map;
    }
    ,
    assertEachIterate: function(t, iterator, array)
    {
        var i = 0;
        while (iterator.hasNext())
        {
            var item = iterator.next();
            var expected = array[i];
            t.assertEqual(expected, item, "iterator must return " + expected);
            i++;
        }
        t.assertEqual(array.length, i, "iterator did not iterator all " + array.length + "items");
    }
    ,
    testNavigableKeySet: function(t)
    {
        var map = this.newMapWith30UnorderedNumbers();
        var keySet = map.navigableKeySet();
        var it = keySet.iterator();
        var i = 1;
        while (it.hasNext())
        {
            var key = it.next();
            t.assertEqual(i, key, "navigable keyset iterator must return " + i + " in this state");
            i++;
        }
        t.assertEqual(31, i, "must have iterated everything");
    }
    ,
    testDescendingKeySet: function(t)
    {
        var map = this.newMapWith30UnorderedNumbers();
        var keySet = map.descendingKeySet();
        var it = keySet.iterator();
        var i = 30;
        while (it.hasNext())
        {
            var key = it.next();
            t.assertEqual(i, key, "descending keyset iterator must return " + i + " in this state");
            i--;
        }
        t.assertEqual(0, i, "must have iterated everything");
    }
    ,
    testFirstKeyIn1To30MustBe1: function(t)
    {
        var map = this.newMapWith30UnorderedNumbers();
        var firstKey = map.firstKey();
        t.assertEqual(1, firstKey, "first key must be 1");
    }
    ,
    testHeadMapTo10Inclusive: function(t)
    {
        var map = this.newMapWith30UnorderedNumbers();
        var headmap = map.headMap(10, true);
        var it = headmap.navigableKeySet().iterator();
        this.assertEachIterate(t, it, [1,2,3,4,5,6,7,8,9,10]);
    }
    ,
    testHeadMapTo10Exclusive: function(t)
    {
        var map = this.newMapWith30UnorderedNumbers();
        var headmap = map.headMap(10, false);
        var it = headmap.navigableKeySet().iterator();
        this.assertEachIterate(t, it, [1,2,3,4,5,6,7,8,9]);
    }
    ,
    testLastKeyIn1To30MustBe30: function(t)
    {
        var map = this.newMapWith30UnorderedNumbers();
        var lastKey = map.lastKey();
        t.assertEqual(30, lastKey, "last key must be 30");
    }
    ,
    testSubMap10To20: function(t)
    {
        var map = this.newMapWith30UnorderedNumbers();
        var submap = map.subMap(10, true, 20, true);
        var it = submap.navigableKeySet().iterator();
        var i = 10;
        while (it.hasNext())
        {
            var key = it.next();
            t.assertEqual(i, key, "navigable keyset iterator must return " + i + " in this state");
            i++;
        }
        t.assertEqual(21, i, "must have iterated everything");
    }
    ,
    testDescendingSubMap10To20: function(t)
    {
        var map = this.newMapWith30UnorderedNumbers();
        var submap = map.subMap(10, true, 20, true);
        var it = submap.descendingKeySet().iterator();
        var i = 20;
        while (it.hasNext())
        {
            var key = it.next();
            t.assertEqual(i, key, "navigable keyset iterator must return " + i + " in this state");
            i--;
        }
        t.assertEqual(9, i, "must have iterated everything");
    }
    ,
    testTailMapFrom20Inclusive: function(t)
    {
        var map = this.newMapWith30UnorderedNumbers();
        var tailmap = map.tailMap(20, true);
        var it = tailmap.navigableKeySet().iterator();
        this.assertEachIterate(t, it, [20,21,22,23,24,25,26,27,28,29,30]);
    }
    ,
    testTailMapFrom20Exclusive: function(t)
    {
        var map = this.newMapWith30UnorderedNumbers();
        var tailmap = map.tailMap(20, false);
        var it = tailmap.navigableKeySet().iterator();
        this.assertEachIterate(t, it, [21,22,23,24,25,26,27,28,29,30]);
    }
    ,
    testSubMap10To20ExclusiveValues: function(t)
    {
        var map = this.newMapWith30UnorderedNumbers();
        var submap = map.subMap(10, false, 20, false);
        var it = submap.values().iterator();
        this.assertEachIterate(t, it, ["11","12","13","14","15","16","17","18","19"]);
    }
    ,
    testNavigableKeySetStrings: function(t)
    {
        var sortedArray = [
            "a_1",
            "aab_2",
            "acc_3",
            "blaaaa_4",
            "blaah_5",
            "foo_6",
            "rra_7",
            "test_8",
            "war_9",
            "xxx_10"
        ];

        var map = this.newMapWith10UnorderedStrings();
        var keySet = map.navigableKeySet();
        var it = keySet.iterator();
        this.assertEachIterate(t, it, sortedArray);
    }

});

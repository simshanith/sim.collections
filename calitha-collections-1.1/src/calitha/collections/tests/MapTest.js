dojo.provide("calitha.collections.tests.MapTest");
dojo.require("calitha.collections");
dojo.require("calitha.collections.tests.Test");
dojo.require("calitha.collections.tests.Employee");
dojo.require("calitha.exception.VirtualFunctionException");

dojo.declare("calitha.collections.tests.MapTest", calitha.collections.tests.Test,
{
    constructor: function()
    {
        calitha.collections.makeNumberHashCompatible(Number.prototype);
    }
    ,
    newMapNumberKey: function() {throw new calitha.exception.VirtualFunctionException(Error())}
    ,
    get3Employees: function()
    {
        return [new calitha.collections.tests.Employee(123, "John", "Doe"),
                new calitha.collections.tests.Employee(167, "Jane", "Doe"),
                new calitha.collections.tests.Employee(219, "Harry", "Potter")];
    }
    ,
    newNumberKeyMapWith3EmployeeValues: function()
    {
        var map = this.newMapNumberKey();
        var employees = this.get3Employees();
        for (var i = 0; i < employees.length; i++)
        {
            var employee = employees[i];
            map.put(employee.getCode(), employee);
        }
        return map;
    }
    ,
    testClearMustResultInEmptyMap: function(t)
    {
        var map = this.newNumberKeyMapWith3EmployeeValues();
        map.clear();
        t.assertTrue(map.isEmpty(), "map must be empty");
    }
    ,
    testContainsKeyMustReturnTrueIfInMap: function(t)
    {
        var map = this.newNumberKeyMapWith3EmployeeValues();
        t.assertTrue(map.containsKey(123), "map must contain 123");
        t.assertTrue(map.containsKey(167), "map must contain 123");
        t.assertTrue(map.containsKey(219), "map must contain 123");
    }
    ,
    testContainsKeyMustReturnFalseIfNotInMap: function(t)
    {
        var map = this.newNumberKeyMapWith3EmployeeValues();
        t.assertFalse(map.containsKey(122), "map must not contain 122");
    }
    ,
    testContainsValueMustReturnTrueIfInMap: function(t)
    {
        var map = this.newNumberKeyMapWith3EmployeeValues();
        var employees = this.get3Employees();
        for (var i = 0; i < employees.length; i++)
        {
            var employee = employees[i];
            t.assertTrue(map.containsValue(employee), "map must contain value employee with code " + employee.getCode());
        }
    }
    ,
    testContainsValueMustReturnFalseIfNotInMap: function(t)
    {
        var map = this.newNumberKeyMapWith3EmployeeValues();
        var employee = new calitha.collections.tests.Employee(2, "Iron", "Man");
        t.assertFalse(map.containsValue(employee), "map must not contain value employee with code " + employee.getCode());
    }
    ,
    testMapsWithSameEmployeesMustBeEqual: function(t)
    {
        var map1 = this.newNumberKeyMapWith3EmployeeValues();
        var map2 = this.newNumberKeyMapWith3EmployeeValues();
        t.assertTrue(map1.equals(map2), "map with same employees must be equal");
    }
    ,
    testMapsWithDifferentEmployeesMustNotBeEqual: function(t)
    {
        var map1 = this.newNumberKeyMapWith3EmployeeValues();
        var map2 = this.newNumberKeyMapWith3EmployeeValues();
        map1.remove(167);
        t.assertFalse(map1.equals(map2), "map with different employees must not be equal");
    }
    ,
    testGetWithContainedKeyReturnsValue: function(t)
    {
        var map = this.newNumberKeyMapWith3EmployeeValues();
        var employee = this.get3Employees()[0];
        var value = map.get(employee.getCode());
        t.assertTrue(employee.equals(value), "map.get must return stored employee");
    }
    ,
    testGetWithUnknownKeyReturnsNull: function(t)
    {
        var map = this.newNumberKeyMapWith3EmployeeValues();
        var value = map.get(1234);
        t.assertEqual(null, value, "map.get with unknown key must return null");
    }
    ,
    testNewMapMustBeEmpty: function(t)
    {
        var map = this.newMapNumberKey();
        t.assertTrue(map.isEmpty(), "new map must be empty");
    }
    ,
    testMapWithEmployeesMustNotBeEmpty: function(t)
    {
        var map = this.newNumberKeyMapWith3EmployeeValues();
        t.assertFalse(map.isEmpty(), "map with employees must not be empty");
    }
    ,
    testPutReturnsNullForNewKey: function(t)
    {
        var map = this.newMapNumberKey();
        var employee = this.get3Employees()[0];
        var value = map.put(employee.getCode(), employee);
        t.assertEqual(null, value, "map must return null when adding new entry");
    }
    ,
    testPutReturnsValueForOldKey: function(t)
    {
        var map = this.newNumberKeyMapWith3EmployeeValues();
        var oldEmployee = this.get3Employees()[0];
        var oldKey = oldEmployee.getCode();
        var employee = new calitha.collections.tests.Employee(oldKey, "New", "Employee");
        var value = map.put(oldKey, employee);
        t.assertTrue(oldEmployee.equals(value), "map must return old value when adding entry with existing key");
    }
    ,
    testMapMustContainAllEntriesAfterPutAll: function(t)
    {
        var map = this.newMapNumberKey();
        var otherMap = this.newNumberKeyMapWith3EmployeeValues();
        map.putAll(otherMap);
        t.assertTrue(map.entrySet().containsAll(otherMap.entrySet()), "map must contain all entries from other map");
    }
    ,
    testMapMustContainAllKeysAfterPutAll: function(t)
    {
        var map = this.newMapNumberKey();
        var otherMap = this.newNumberKeyMapWith3EmployeeValues();
        map.putAll(otherMap);
        t.assertTrue(map.keySet().containsAll(otherMap.keySet()), "map must contain all keys from other map");
    }
    ,
    testMapMustContainAllValuesAfterPutAll: function(t)
    {
        var map = this.newMapNumberKey();
        var otherMap = this.newNumberKeyMapWith3EmployeeValues();
        map.putAll(otherMap);
        t.assertTrue(map.values().containsAll(otherMap.values()), "map must contain all values from other map");
    }
    ,
    testRemoveMustReturnOldValue: function(t)
    {
        var map = this.newNumberKeyMapWith3EmployeeValues();
        var employee = this.get3Employees()[1];
        var result = map.remove(employee.getCode());
        t.assertTrue(employee.equals(result), "Map must return old value when removing with key");
    }
    ,
    testRemoveMustReturnNullForUnknownKey: function(t)
    {
        var map = this.newNumberKeyMapWith3EmployeeValues();
        var result = map.remove(1234);
        t.assertEqual(null, result, "Map must return null when removing with unknown key");
    }
    ,
    testSizeOfMapWith3EmployeesIs3: function(t)
    {
        var map = this.newNumberKeyMapWith3EmployeeValues();
        t.assertEqual(3, map.size(), "Map must have size 3");
    }
    ,
    testPutAndGet1000Employees: function(t)
    {
        var map = this.newMapNumberKey();
        for (var i = 0; i < 1000; i++)
        {
            var employee = new calitha.collections.tests.Employee(i, "first" + i, "last" + i);
            t.assertEqual(null, map.put(employee.getCode(), employee), "putting a new entry must return null");
        }
        for (var j = 0; j < 1000; j++)
        {
            t.assertEqual(j, map.get(j).getCode(), "map get with employee code must return the corresponding employee");
        }
    }


});

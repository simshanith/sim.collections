dojo.provide("calitha.collections.tests.EmployeeComparator");
dojo.require("calitha.collections.tests.Employee");

dojo.declare("calitha.collections.tests.EmployeeComparator", calitha.collections.IComparator,
{

    compare: function(o1, o2)
    {
        if ((!calitha.collections.util.isObjectInstanceOf(o1, calitha.collections.tests.Employee)) ||
            (!calitha.collections.util.isObjectInstanceOf(o2, calitha.collections.tests.Employee)))
        {
            throw new calitha.exception.IllegalArgumentException(Error("Can only compare employees"));
        }
        //noinspection UnnecessaryLocalVariableJS
        var employee1 = o1;
        //noinspection UnnecessaryLocalVariableJS
        var employee2 = o2;
        return calitha.collections.numberComparator().compare(employee1.getCode(), employee2.getCode());
    }

});

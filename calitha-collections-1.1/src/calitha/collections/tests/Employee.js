dojo.provide("calitha.collections.tests.Employee");

dojo.declare("calitha.collections.tests.Employee", null,
{
    constructor: function(code, firstName, lastName)
    {
        this._code = code;
        this._firstName = firstName;
        this._lastName = lastName;
    },
    getCode: function()
    {
        return this._code;
    }
    ,
    getFirstName: function()
    {
        return this._firstName;
    }
    ,
    getLastName: function()
    {
        return this._lastName;
    }
    ,
    equals: function(obj)
    {
        if (obj == null) return false;
        if (this === obj) return true;
        if (!calitha.collections.util.isObjectInstanceOf(obj, calitha.collections.tests.Employee)) return false;
        //noinspection UnnecessaryLocalVariableJS
        var employee = obj;
        return this._code === employee._code;
    }
    ,
    hashCode: function()
    {
        return this._code;
    }
    ,
    toString: function()
    {
        return this._firstName + " " + this._lastName + " (" + this._code + ")";
    }
});

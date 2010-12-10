dojo.provide("calitha.collections.tests.Test");
dojo.require("calitha.collections.tests.DojoTestDefinition");

dojo.declare("calitha.collections.tests.Test", null,
{
    register: function()
    {
        for (var name in this)
        {
            if (name.indexOf("test") == 0)
            {
                doh.register(this.declaredClass,
                              new calitha.collections.tests.DojoTestDefinition(name, this[name], this.setUp,  this.tearDown, this));
            }
        }
    }
    ,
    setUp: function() {}
    ,
    tearDown: function() {}
});

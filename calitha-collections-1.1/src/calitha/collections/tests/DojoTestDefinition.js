dojo.provide("calitha.collections.tests.DojoTestDefinition");

dojo.declare("calitha.collections.tests.DojoTestDefinition", null,
{
    constructor: function(name, runTest, setUp, tearDown, scope)
    {
        this.name = name;
        this.runTest = dojo.hitch(scope, runTest);
        this.setUp = dojo.hitch(scope, setUp);
        this.tearDown = dojo.hitch(scope, tearDown);
    }
});

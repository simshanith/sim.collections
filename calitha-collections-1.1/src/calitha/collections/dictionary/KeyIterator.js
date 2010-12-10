dojo.provide("calitha.collections.dictionary.KeyIterator");
dojo.require("calitha.collections.dictionary.DictionaryIterator");

dojo.declare("calitha.collections.dictionary.KeyIterator", calitha.collections.dictionary.DictionaryIterator,
/** @lends calitha.collections.dictionary.KeyIterator# */
{
    /**
     * @constructs
     * @extends calitha.collections.dictionary.DictionaryIterator
     */
    constructor: function(/**calitha.collections.Dictionary*/ map)
    {
    }
    ,
    next: function()
    {
        return this._nextEntry().getKey();
    }
});

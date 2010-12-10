dojo.provide("calitha.collections.dictionary.ValueIterator");
dojo.require("calitha.collections.dictionary.DictionaryIterator");

dojo.declare("calitha.collections.dictionary.ValueIterator", calitha.collections.dictionary.DictionaryIterator,
/** @lends calitha.collections.dictionary.ValueIterator# */
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
        return this._nextEntry().getValue();
    }
});

dojo.provide("calitha.collections.dictionary.EntryIterator");
dojo.require("calitha.collections.dictionary.DictionaryIterator");

dojo.declare("calitha.collections.dictionary.EntryIterator", calitha.collections.dictionary.DictionaryIterator,
/** @lends calitha.collections.dictionary.EntryIterator# */
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
        return this._nextEntry();
    }
});

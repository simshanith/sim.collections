dojo.provide("calitha.collections.linkedlist.Entry");

dojo.declare("calitha.collections.linkedlist.Entry", null,
/** @lends calitha.collections.linkedlist.Entry# */
{
    /**
     * @constructs
     */
    constructor: function(/**Object*/ element,
                          /**calitha.collections.linkedlist.Entry*/ prev,
                          /**calitha.collections.linkedlist.Entry*/ next)
    {
        this.element = element;
        this.prev = prev;
        this.next = next;
    }
});

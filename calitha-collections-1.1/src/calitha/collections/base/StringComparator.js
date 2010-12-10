dojo.provide("calitha.collections.base.StringComparator");
dojo.require("calitha.collections.IComparator");
dojo.require("calitha.exception.IllegalArgumentException");

dojo.declare("calitha.collections.base.StringComparator", calitha.collections.IComparator,
/** @lends calitha.collections.base.StringComparator# */
{

    /**
     * @constructs
     * @extends calitha.collections.IComparator
     */
     constructor: function(/**Boolean*/ caseInsensitive, /**Boolean*/ strictTypes)
     {
         this._caseInsensitive = (caseInsensitive == null) ? false : caseInsensitive;
         this._strictTypes = (strictTypes == null) ? true : strictTypes;
     }
     ,
     compare: function(/**Object*/ obj1, /**Object*/ obj2)
     {
         if (this._strictTypes)
         {
             this._validateStringArguments(obj1, obj2);
         }
         else
         {
             obj1 = "" + obj1;
             obj2 = "" + obj2;
         }
         if (this._caseInsensitive)
         {
             obj1 = obj1.toLocaleLowerCase();
             obj2 = obj2.toLocaleLowerCase();
         }
         return this._compareStrings(obj1, obj2);
     }
     ,
     _validateStringArguments: function(/**Object*/ arg1, /**Object*/ arg2)
     {
         if ((typeof arg1 != "string") || (typeof arg2 != "string"))
         {
             throw new calitha.exception.IllegalArgumentException(Error("Can only compare strings"));
         }
     }
     ,
     _compareStrings: function(/**String*/ str1, /**String*/ str2)
     {
         return str1.localeCompare(str2);
     }
 });

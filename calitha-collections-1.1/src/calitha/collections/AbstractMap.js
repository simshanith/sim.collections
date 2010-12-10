dojo.provide("calitha.collections.AbstractMap");
dojo.require("calitha.collections.IMap");
dojo.require("calitha.collections.util");
dojo.require("calitha.collections.abstractmap.KeySet");
dojo.require("calitha.collections.abstractmap.ValuesCollection");
dojo.require("calitha.exception.UnsupportedOperationException");

dojo.declare("calitha.collections.AbstractMap", calitha.collections.IMap,
/** @lends calitha.collections.AbstractMap# */
{
    /**
     * @constructs
     * @extends calitha.collections.IMap
     */
    constructor: function()
    {
        this._keySet = null;
        this._values = null;
    }
    ,
    clear: function()
    {
	    this.entrySet().clear();
    }
    ,
    containsKey: function(/**Object*/ key)
    {
        var it = this.entrySet().iterator();
        while (it.hasNext())
        {
            var entry = it.next();
            if (calitha.collections.util.equals(entry.getKey(), key))
            {
                return true;
            }
        }
        return false;
    }
    ,
    containsValue: function(/**Object*/ value)
    {
        var it = this.entrySet().iterator();
        while (it.hasNext())
        {
            var entry = it.next();
            if (calitha.collections.util.equals(entry.getValue(), value))
            {
                return true;
            }
        }
        return false;
    }
    ,
    equals: function(/**Object*/ o)
    {
        if (o === this)
        {
            return true;
        }
        if (!(calitha.collections.util.isObjectInstanceOf(o, calitha.collections.IMap)))
        {
            return false;
        }
        //noinspection UnnecessaryLocalVariableJS
        var map = o;
	    if (map.size() != this.size())
        {
	        return false;
        }
        var it = this.entrySet().iterator();
        while (it.hasNext())
        {
            var entry = it.next();
            var key = entry.getKey();
            var value = entry.getValue();
            if (value === null)
            {
                if (!(map.get(key) === null && map.containsKey(key)))
                {
                    return false;
                }
            }
            else
            {
                if (!value.equals(map.get(key)))
                {
                    return false;
                }
            }
        }
        return true;
    }
    ,
    get: function(/**Object*/ key)
    {
        var it = this.entrySet().iterator();
        while (it.hasNext())
        {
            var entry = it.next();
            if (calitha.collections.util.equals(entry.getKey(), key))
            {
                return entry.getValue();
            }
        }
        return null;
    }
    ,
    hashCode: function()
    {
	    var result = 0;
        var it = this.entrySet().iterator();
        while (it.hasNext())
        {
            result += calitha.collections.util.hashCode(it.next())
        }
        return result;
    }
    ,
    isEmpty: function()
    {
	    return this.size() === 0;
    }
    ,
    keySet: function()
    {
        if (this._keySet === null)
        {
            this._keySet = new calitha.collections.abstractmap.KeySet(this);
        }
        return this._keySet;
    }
    ,
    put: function(/**Object*/ key, /**Object*/ value)
    {
	    throw new calitha.exception.UnsupportedOperationException(Error());
    }
    ,
    putAll: function(/**calitha.collections.IMap*/ map)
    {
        var it = map.entrySet().iterator();
        while (it.hasNext())
        {
            var entry = it.next();
            this.put(entry.getKey(), entry.getValue());
        }
    }
    ,
    remove: function(/**Object*/ key)
    {
        var it = this.entrySet().iterator();
        var correctEntry = null;
        while (it.hasNext())
        {
            var entry = it.next();
            if (calitha.collections.util.equals(entry.getKey(), key))
            {
                correctEntry = entry;
                break;
            }
        }
        var oldValue = null;
        if (correctEntry != null)
        {
            oldValue = correctEntry.getValue();
            it.remove();
        }
        return oldValue;
    }
    ,
    size: function()
    {
	    return this.entrySet().size();
    }
    ,
    toString: function()
    {
	    var it = this.entrySet().iterator();
	    if (! it.hasNext())
        {
	        return "{}";
        }
	    var sb = new calitha.collections.StringBuilder();
	    sb.append('{');
        while (it.hasNext())
        {
            var entry = it.next();
            var key = entry.getKey();
            var value = entry.getValue();
            sb.append(key === this ? "(this Map)" : key);
            sb.append('=');
            sb.append(value === this ? "(this Map)" : value);
            if (it.hasNext())
            {
                sb.append(", ");
            }
        }
        return sb.append('}').toString();
    }
    ,
    values: function()
    {
        if (this._values === null)
        {
            this._values = new calitha.collections.abstractmap.ValuesCollection(this);
        }
        return this._values;
    }

});





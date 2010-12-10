dojo.provide("calitha.collections.util");

/**
 * @name calitha.collections.util
 * @namespace
 * @description This is a collection of misc convenience methods. They primarily try to prevent extra
 * parameter validation (for example for null) in code.
 *
 */

/**
 * @function
 * @param value1 a value
 * @param value2 another value
 * @returns {Boolean} true if the values are equal
 * @description Determines if two values are equal. Values are strictly equal if the strictly equals operator ===
 * return true, or if the equals method on the object return true. Of course object must have such a method.
 * Otherwise it returns false.
 */
calitha.collections.util.equals = function(/**Object*/ value1, /**Object*/ value2)
{
    if (value1 === value2)
        return true;
    if (value1 === null)
        return false;
    if (value2 === null)
        return false;
    if (value1.equals)
        return value1.equals(value2);
    return false;
};

/**
 * @function
 * @param obj object
 * @returns {Number} hash code
 * @description Determines the hashcode for an object. The object can be null in which case it returns 0.
 */
calitha.collections.util.hashCode = function(/**Object*/ obj)
{
    if (obj == null)
    {
        return 0;
    }
    else if (obj.hashCode)
    {
        return obj.hashCode();
    }
    throw new calitha.exception.IllegalArgumentException(Error("no hashCode available"));
};

/**
 * @function
 * @param obj object
 * @param clazz class
 * @returns {Boolean} true if the object is an instance of the class
 * @description Determines if the object is an instance of a class (which is a function in javascript).
 * <p>This function uses the special dojo isInstanceOf function, so it can deal with multiple inheritance.
 */
calitha.collections.util.isObjectInstanceOf = function(/**Object*/ obj, /**Function*/ clazz)
{
    if (obj == null)
    {
        return false;
    }
    if (obj.isInstanceOf)
    {
        return obj.isInstanceOf(clazz);
    }
    return obj instanceof clazz;
};

/**
 * @function
 * @param obj object
 * @param property property name
 * @returns {Boolean} true if it has the property
 * @description Determines if the object has a property with this name
 */
calitha.collections.util.has = function(obj, property)
{
    return (typeof obj[name] !== 'undefined');
};

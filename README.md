# lodashmethods
some lodash methods


# **_.clamp (number, [lower], upper):**
## Clamps number within the inclusive lower and upper bounds.

## Arguments
**number (number)** : The number to clamp.
**[lower] (number)**: The lower bound.
**upper (number)**: The upper bound.
Returns
**(number)**: Returns the clamped number.
## **Example**
_.clamp(-10, -5, 5);
// => -5
 
_.clamp(10, -5, 5);
// => 5




# **_.inRange ([start=0], end, [step=1]) :**
## Checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end the params are swapped to support negative ranges.
## Arguments
**number (number)**: The number to check.
**[start=0] (number)**: The start of the range.
**end (number)**: The end of the range.
Returns
## **(boolean)**: Returns true if number is in the range, else false.
## **Example**
_.range(4);
// => [0, 1, 2, 3]
 
_.range(-4);
// => [0, -1, -2, -3]
 
_.range(1, 5);
// => [1, 2, 3, 4]




# **_.words ([string=''], [pattern]):** 
## Splits string into an array of its words.
Arguments
[string=''] (string): The string to inspect.
[pattern] (RegExp|string): The pattern to match words.
Returns
(Array): Returns the words of string.
_.words('fred, barney, & pebbles');
// => ['fred', 'barney', 'pebbles']
 
_.words('fred, barney, & pebbles', /[^, ]+/g);
// => ['fred', 'barney', '&', 'pebbles']




_.pad ([string=''], [length=0], [chars=' ']) :Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.
Arguments
[string=''] (string): The string to pad.
[length=0] (number): The padding length.
[chars=' '] (string): The string used as padding.
Returns
(string): Returns the padded string.

Example
_.pad('abc', 8);
// => '  abc   '
 
_.pad('abc', 8, '_-');
// => '_-abc_-_'




_.has (object, path):Checks if path is a direct property of object.
Arguments
object (Object): The object to query.
path (Array|string): The path to check.
Returns
(boolean): Returns true if path exists, else false.

Example
var object = { 'a': { 'b': 2 } };
var other = _.create({ 'a': _.create({ 'b': 2 }) });
 
_.has(object, 'a');
// => true
 
_.has(object, 'a.b');
// => true




_.invert (object): Creates an object composed of the inverted keys and values of object. If object contains duplicate values, subsequent values overwrite property assignments of previous values.
Arguments
object (Object): The object to invert.
Returns
(Object): Returns the new inverted object.

Example
var object = { 'a': 1, 'b': 2, 'c': 1 };
 
_.invert(object);
// => { '1': 'c', '2': 'b' }




_.findKey (object, [predicate=_.identity]) :This method is like _.find except that it returns the key of the first element predicate returns truthy for instead of the element itself.
Arguments
object (Object): The object to inspect.
[predicate=_.identity] (Function): The function invoked per iteration.
Returns
(*): Returns the key of the matched element, else undefined.

Example
var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};
 
_.findKey(users, function(o) { return o.age < 40; });
// => 'barney' (iteration order is not guaranteed)
 
// The `_.matches` iteratee shorthand.
_.findKey(users, { 'age': 1, 'active': true });
// => 'pebbles'




  _.drop(array, [n=1]) : Creates a slice of array with n elements dropped from the beginning.
Arguments
array (Array): The array to query.
[n=1] (number): The number of elements to drop.
Returns
(Array): Returns the slice of array.

Example
_.drop([1, 2, 3]);
// => [2, 3]
 
_.drop([1, 2, 3], 2);
// => [3]
 
_.drop([1, 2, 3], 5);
// => []




_.dropWhile(array, [predicate=_.identity]) : Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
Arguments
array (Array): The array to query.
[predicate=_.identity] (Function): The function invoked per iteration.
Returns
(Array): Returns the slice of array.

Example
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
_.dropWhile(users, function(o) { return !o.active; });
// => objects for ['pebbles']




_.chunk(array, [size=1]): Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
Arguments
array (Array): The array to process.
[size=1] (number): The length of each chunk
Returns
(Array): Returns the new array of chunks.

Example
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

# Arrays

Arrays are populated with elements, which can be of any type.

e.g. `let newArray = ['JavaScript', 21, true];`

- Leaving an empty space creates an empty element.

### Declaration of Arrays
1. Constructor method

Syntax: 

`let newArray = new Array();`

2. Literal Notation

Syntax: 

`let newArray = [];`

-------------------------------------------------------------------------------------------------------------------------------
- `forEach()` : it is a special function, built into javascript, that will run once for each element in the array.

```
let newArray = ['JavaScript', 21, true];
newArray.forEach((x, i) => console.log(x));
```

where `x` is the string value returned by the `forEach()` function, & `i` holds the index of the array retuned by the funtion.

--------------------------------------------------------------------------------------------------------------------------------
## Array Methods
1. `shift()` : Removes item from the beginning of the array.

`arrayName.shift()`

2. `pop()` : Removes item from the end of the array.

`arrayName.pop()`

3. `unshift()` : Adds item to the beginning of the array.

`arrayName.unshift('item1')`

4. `push()` : Adds item to the end of the array.

`arrayName.push('item3')`

5. `map()` : Loops through an array, but it creates a new array. It runs once for each element.

```
let array = ['item1', 'item2', 'item3']
let count = array.map(x => 'item1')

// map() returns only the 'item1' element n times.
console.log(count)
// ['item1', 'item1', 'item1']
```

--------------------------------------------------------------------------------------------------------------------------------
### String Method : `charAt()`

- String method `charAt()` is used to get the character/alphabet of the string, where it takes index (similar to arrays) as argument.

--------------------------------------------------------------------------------------------------------------------------------



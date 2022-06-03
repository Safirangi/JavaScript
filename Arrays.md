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

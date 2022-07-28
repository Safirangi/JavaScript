# Arrow Function

- Arrow Function does not need a `return` keyword, because it implicitly returns.

For no parameters passed: 

e.g. `const functionName = () => { //statements };`

or 

`const functionName = _ => { //statements };`

- Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) 
and then add an arrow => that points to the function body surrounded in { } like this:
```
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};
```

## Concise Body Arrow Functions
- The most condensed form of the function is known as concise body.
1. Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.

```
// zero parameters
const functionName = () => {};

// one parameter
const functionName = paramOne => {};

// two or more parameters
const functionName = (paramOne, paramTwo) => {};
```

2. A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.
```
// single-line block
const sumNumbers = num => num + num;

//multi-line block
const sumNumbers = num => {
  let sum = num + num;
  return sum;
};
```








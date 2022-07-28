# Functions in JavaScript

- A function declaration is a function that is bound to an identifier, or name.
- hoisting feature in JavaScript allows access to function declarations before they’re defined.

```
greetWorld(); // Output: Hello, World!
 
function greetWorld() {
  console.log('Hello, World!');
}
```

- Parameters allow functions to accept input(s) and perform a task using the input(s). We use parameters as placeholders for information 
that will be passed to the function when it is called.
- The values that are passed to the function when it is called are called Arguments. Arguments can be passed to the function as values or variables.
- Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.

```
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
 
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!
```

- We can also use the return value of a function inside another function. These functions being called within another function are often referred to as helper 
functions. 
```
function multiplyByNineFifths(number) {
  return number * (9/5);
};
 
function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};
 
getFahrenheit(15); // Returns 59
```

## Function Expression

- Function Expression is another way to define a function. In a function expression, the function name is usually omitted. A function with no name 
is called an anonymous function. A function expression is often stored in a variable in order to refer to it.
```
const calculateArea = function(width, height) {
  const area = width * height;
  return area;
 };
 ```
 - To invoke a function expression, write the name of the variable in which the function is stored followed by parentheses enclosing any arguments 
 being passed into the function.
 ```
 variableName(argument1, argument2)
 ```
 - Unlike function declarations, function expressions are not hoisted so they cannot be called before they are defined.







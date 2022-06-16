# JavaScript Objects

- Objects are a collection of variables and functions.
- Objects represent the attributes and behaviour of something used in a program.
- Object variables are called Properties and Object functions are called Methods.
- Objects store 'keyed' collection 

### Literal Notation of Objects
e.g.

```
let stopwatch = {} 

stopwatch.currentTime = 12    //property of the object

stopwatch.tellTime = function(time) {   //method of the object
  console.log('The current time is ${time}.')
}

stopwatch.tellTime(stopwatch.currentTime)

```

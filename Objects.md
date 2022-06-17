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

### Constructor
e.g.

```
function MakeCar(carMake, carModel, carColor, numOfDoors) {
  this.make = carMake
  this.model = carModel
  this.color = carColor
  this.doors = numOfDoors
  
  this.honk = function() {
    alert('BEEP BEEP')
  }
  
  this.lock = function() {
    alert('Locked ${this.doors} doors!')
  }
}

//MakeCar is class, hondaCivic and teslaRoadster are objects.
//'new' keyword creates new objects.

let hondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4)
let teslaRoadster = new MakeCar('Tesla', 'Roadster', 'Red', 2)
```

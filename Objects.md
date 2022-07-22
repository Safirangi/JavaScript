# JavaScript Objects

- Objects are a collection of variables and functions.
- Objects represent the attributes and behaviour of something used in a program.
- Object variables are called Properties and Object functions are called Methods.
- Objects store 'keyed' collection 

### Literal Notation of Objects
e.g.

```
let stopwatch = {} 
/*'stopwatch' is the class*/

stopwatch.currentTime = 12    //property of the object

stopwatch.tellTime = function(time) {   //method of the object
  console.log(`The current time is ${time}.`)
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
    alert(`Locked ${this.doors} doors!`)
  }
}

//MakeCar is class, hondaCivic and teslaRoadster are objects.
//'new' keyword creates new objects.

let hondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4)
let teslaRoadster = new MakeCar('Tesla', 'Roadster', 'Red', 2)
```

### Class and Constructor
Class is a template for objects.

e.g.

```
class MakeCar {
  constructor(carMake, carModel, carColor, numOfDoors) {
    this.make = carMake
    this.model = carModel
    this.color = carColor
    this.doors = numOfDoors
  }
  honk() {      //methods do not need 'function' keyword
    alert('BEEP BEEP')
  }
  lock() {
    alert(`Locked ${this.doors} doors!`)
  }
}

let hondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4)
```

### Prototype
A Prototype is another object that is used as a fallback source of properties.

e.g.
```
let teslaRoadster = new MakeCar('Tesla', Roadster', 'Red', 4)
console.log(teslaRoadster.bluetooth)    //property undefined
MakeCar.prototype.bluetooth = true;
console.log(teslaRoadster.bluetooth)
```

### 'this' keyword
'this' keyword binds the properties of the class to the objects created by the class. It helps an object to refer to itself.

//heads or tails returning function

function headsOrTails() {
  let result = Math.random();
  //Math.random() function returns a random number between 0 & 1.
  
  if(result < 0.5) {
    return 'Heads';
  } else {
    return 'Tails';
  }
}

/*passing the function as a parameter to the 'alert()' function*/
alert(headsOrTails());

//arrow function for headsOrTails()
//const headsOrTails = _ => Math.random() < 0.5 ? 'Heads' : 'Tails';

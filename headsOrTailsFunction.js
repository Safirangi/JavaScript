//Heads or Tails returning function

function headsOrTails() {
  let result = Math.random();
  //Math.random() returns a random number between 0 & 1.
  
  if(result < 0.5) {
    return 'Heads';
  } else {
    return 'Tails';
  }
}

alert(headsOrTails());

//Arrow Function for headsOrTails()
const headsOrTails = _ => Math.random() < 0.5 ? 'Heads' : 'Tails';

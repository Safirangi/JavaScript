//Heads or Tails returning function

function headsOrTails() {
  let result = Math.random();
  
  if(result < 0.5) {
    return 'Heads';
  } else {
    return 'Tails';
  }
}

alert(headsOrTails());

//Arrow Function for headsOrTails()
const headsOrTails = _ => Math.random < 0.5 ? 'Heads' : 'Tails';

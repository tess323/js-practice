let moonPhase = 'false';
let isFoggyNight = false;

if (moonPhase==='full'|| isFoggyNight){
  console.log('Howl');
  
} else if (moonPhase==='mostly full'){
    console.log('Arms and legs are getting hairier.');
} else if (moonPhase==='mostly new'){
  console.log('Back on two feet');
}else{
  console.log('Invalid moon phase');
}



switch(moonPhase) {
  case 'full':
      console.log('Howl');
      break;
  case 'mostly full':
    console.log('Arms and legs are getting       harier');
    break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('Invalid moon phase');
    break;
  
}


//ternary

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!"); 
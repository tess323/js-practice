// user and computer choice for RPS



var userChoice = prompt("Do you choose rock, paper or scissors");

console.log(userChoice);

var computerChoice = Math.random();

console.log(computerChoice);

if(computerChoice<= 0.33) {
    computerChoice="rock";
    }else if (computerChoice>= 0.33 && computerChoice <= 0.67) {
        computerChoice="paper";
    } else {
        computerChoice="scissors";
    }
    
console.log(computerChoice);
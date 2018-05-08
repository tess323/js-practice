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


// writing a compare function with all of the options for rps

function compare (choice1, choice2) {
    if(choice1===choice2) {
        return "The result is a tie!";
    } else if (choice2==="scissors") {
        return "scissors wins";
    }else if (choice1==="paper") {
        if (choice2 ==="rock"){
            return"paper wins";
        } else if (choice2==="scissors") {
            return "scissors win";
        }  
    } 
    else {
        return "paper wins";
    } 
}
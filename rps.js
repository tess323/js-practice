
// defining user input via a pop up
var userChoice = prompt("Do you choose rock, paper or scissors?");

// using math random to find the computers input
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);


// function to compare user choice and computer choice
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
    } else if(choice2==="rock") {
        return "rock wins";
    } else if (choice2==="paper"){
        return "scissors wins"
        }
    else {
        return "paper wins";
    } 
}

// calling function above with the variables above

compare(userChoice, computerChoice);

// print result to screen

document.write(compare(userChoice, computerChoice));

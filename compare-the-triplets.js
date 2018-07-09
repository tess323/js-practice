// compare the triplets

function solve(a, b) {

    var results = [0,0];

    if (a[0] > b[0]) {results[0] += 1;} 
    if (a[1] > b[1]) {results[0] += 1;} 
    if (a[2] > b[2]) {results[0] += 1;}
    if (a[0] < b[0]) {results[1] += 1;}
    if (a[1] < b[1]) {results[1] += 1;}
    if (a[2] < b[2]) {results[1] += 1;}

    return results;
}


// parsing integers, decimals and concatinating strings
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    
    console.log(firstInteger+ parseInt(secondInteger));
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    console.log(firstDecimal + parseFloat(secondDecimal));
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    
    console.log(firstString + secondString);
    
}
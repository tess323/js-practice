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
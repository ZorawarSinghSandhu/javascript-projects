const score = 50.42761812;
const balance = 12500000;

// console.log(score.toFixed(3)); // Rounds off to the 3 decimal places. 

// console.log(balance.toLocaleString("en-IN"));

// console.log(score.toPrecision(4));

/*
Difference between toFixed() and toPrecision():
toFixed() -> Controls the number of digits after the decimal point.
toPrecision() -> Controls the total number of significant digits (digits before and after the decimal point)
*/


// ************************* Maths ********************************

let decimal_num = 24.838591730;
let negative_num = -423741;
let num = 637118;
let num2 = 100000;


// console.log(Math.floor(decimal_num))
// console.log(Math.random())
// console.log(Math.round(decimal_num))
// console.log(Math.max(5,2,12,54,23,44,65,48,34,11))
// console.log(Math.abs(negative_num))
// console.log(Math.ceil(decimal_num))
// console.log(Math.log(num))
// console.log(Math.LN2)
// console.log(Math.pow(7, 2))
// console.log(Math.sqrt(81))
// console.log(Math.sign(-478328))


console.log((Math.floor(Math.random() * 20) + 1)) // To get numbers between 1 and 20 (including both)

console.log(Math.floor(Math.random() * 30) + 30); // Outputs a random number in the range 30 - 59

console.log(Math.floor(Math.random() * 30) + 31); // Outputs a random number in the range 31 - 60

console.log(Math.floor(Math.random() * 31) + 30); // Outputs a random number in the range 30 - 60

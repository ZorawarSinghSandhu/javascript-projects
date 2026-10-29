// let score = null;
// let score = undefined;
// let score = true;

// console.log(typeof score); // or typeof(score)
// console.log(typeof(score));

// let numericScore = Number(score);

// console.log(typeof numericScore);
// console.log(numericScore);

/*
Do not rely on Number() to convert strings or any other data type to a number. It can generate some unexpected results
For eg:
Number("33") => 33
Number("33abc") => NaN (Although it's data type would still be shown as "number")
Number("Zorawar") => NaN
*/

let number = 33;

let stringNumber = String(number);

console.log(typeof stringNumber);
console.log(stringNumber); 


let num = 0;
let boolValue = Boolean(num);
console.log(typeof boolValue);
console.log(boolValue);

/*
Any number that is not 0 is converted to true. Any string that is not empty is also converted to true. Otherwise it is false.
*/
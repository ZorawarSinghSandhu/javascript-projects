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

// let number = 33;

// let stringNumber = String(number);

// console.log(typeof stringNumber);
// console.log(stringNumber); 


// let num = 0;
// let boolValue = Boolean(num);
// console.log(typeof boolValue);
// console.log(boolValue);

/*
Any number that is not 0 is converted to true. Any string that is not empty is also converted to true. Otherwise it is false.
*/

// ************************* Operators ***************************

// console.log(5+3);
// console.log(5-3);
// console.log(5*3);
// console.log(5/3);
// console.log(5**3);
// console.log(5%3);

// Concatenation of Strings, and Strings and numbers
// console.log("Hello " + "World");

// console.log("4" + 5);
// console.log(4 + "5");
// console.log("1" + 2 + 3);
// console.log(1 + "2" + 3);
// console.log(1 + 2 + "3");

// console.log(+true);

// console.log(+"");

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2 // Avoid writing code like this


let gameCounter = 100;
let newCounter = ++gameCounter; // 100 in case of gameCounter++
console.log(newCounter);



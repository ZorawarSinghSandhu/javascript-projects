// Primitive Data types: number, string, bigint, boolean, undefined, null, and symbol

// let score = 100;
// score  = '33';
// score = true;

// let score = Symbol('123');
// let anotherScore = Symbol('123');

// console.log(typeof(score));
// console.log(score == anotherScore); //false, as each symbol is unique, even if values inside it are the same.



// Non-primitive data types: Arrays, functions, objects, sets, maps, date

// const fruits = ["Apple", "Orange", "Banana"];

// const myObj = {
//     name: "Chris",
//     details: {
//         age: 28,
//         weight: 76 
//     }
// }


// const myFunc = function() {
//     console.log("Hello World");
// }
// function anotherFunc() {
//     console.log("Hello again");
    
// }

// myFunc()
// anotherFunc()


const bigNumber = 123456789128441348923823n; // Use 'n' at the end to convert it from number to bigint, otherwise very large numbers cannot be represented properly. A bigint can represent very large numbers also.

console.log(typeof bigNumber);
console.log(bigNumber);
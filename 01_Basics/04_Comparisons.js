// Avoid these 6 types of Comparisons below, as the conversion of null/undefined to a number can be unpredictable and can generate unpredictable outputs

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

// console.log(true >= 0); //true
// console.log(false >= 1); //false
// console.log(true > false); //true
// console.log(true < false); //false
// console.log(true <= false); //false
// console.log(true >= false); //true

// console.log(true == "1"); //true
// console.log(true === "1"); //false
// console.log(true <= "1"); //true
// console.log(false >= "0"); //true


// console.log(true >= "2"); //false
// console.log(true >= ""); //true
// console.log(true == ""); //false
// console.log(false >= "-4"); //true
// console.log(false <= ""); //true

console.log("B" > "A"); //true
console.log("C" < "A"); //false

console.log("ABC" > "ABC"); //false
console.log("ABD" > "ABC"); //true
console.log("ABC" > "ABCD"); //false




let userName = "storm_chaser";
let level = 20;

// console.log(userName + level + " gold"); // This method of adding variables to a string is outdated.

// Always use backticks (` `) to write strings where a variable needs to be inserted. 
// Variables are inserted using `${}`

// console.log(`My username is ${userName}. My level is ${level}`);


let gameName = new String("need_for_speed");
// console.log(gameName);

// console.log(gameName.charAt(2)); // e

// => .concat()

// let str1 = "Hello";
// let str2 = "World";

// let result = str1.concat(", ", str2);
// console.log(result);

// => .endsWith() -> To check whether a string ends with a particular character or substring.

// console.log(gameName.endsWith("speed")); //true
// console.log(gameName.endsWith("eed")); //true
// console.log(gameName.endsWith("spee")); //false
// console.log(gameName.endsWith("spee", 13)); //true

const sentence = "The quick brown fox jumps over the lazy fox.";

const word = "fox";

// => .includes() -> To check whether a character or substring is present within a string.

console.log(sentence.includes(word)); //true

// => .indexOf(searchString, position) => To find out the index of the first occurence of searchString in a string, at a position greater than or equal to 'position'. It is case-sensitive.

console.log(sentence.indexOf("fox")); //16
console.log(sentence.indexOf("fox", 17)); //40

// => .lastIndexOf() -> Returns the last index of a substring within a string.

console.log(sentence.lastIndexOf("fox")); //40




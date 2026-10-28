const accountId = 12345;
var accountName = "ABC";
let accountEmail = "abc@xyz.in";
accountCity = "Mohali";

var accountState;

console.table([accountId, accountName, accountEmail, accountCity]);

console.log(accountState); // outputs "undefined", whether you use "var" or "let", but in case of accountCity, it will throw an error


// let x = 10;

// if (x > 5){
//     var myNumber = 25;
//     let yourNumber = 999;
// }

// console.log(myNumber); // Prints the value of myNumber
// console.log(yourNumber); // Throws an error: "yourNumber is not defined"


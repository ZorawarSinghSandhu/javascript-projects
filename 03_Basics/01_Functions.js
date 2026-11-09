function addTwoNumbers(num1, num2){
    const result = num1 + num2;
    return result;
}

let result = addTwoNumbers(5, "abc"); // If we do not pass an argument or both, it will output NaN. If we pass one string or both as strings, then the result is a concatenated string.
// console.log(result);

function loginMessage(userName = "alex123"){
    return `${userName} just logged in!`; 
}

console.log(loginMessage()); // If we do not pass any argument, then username is equal to undefined inside the function. Output: undefined just logged in!



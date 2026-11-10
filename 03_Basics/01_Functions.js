function addTwoNumbers(num1, num2){
    const result = num1 + num2;
    return result;
}

let result = addTwoNumbers(5, "abc"); // If we do not pass an argument or both, it will output NaN. If we pass one string or both as strings, then the result is a concatenated string.
// console.log(result);

function loginMessage(userName = "alex123"){
    return `${userName} just logged in!`; 
}

// console.log(loginMessage()); // If we do not pass any argument, then username is equal to undefined inside the function. Output: undefined just logged in!

function returnNums(num1, num2, ...nums){
    return nums;
}

// Returning 2 or more values (return num1, num2) in a single return statement returns only the value written afterwards (num2 in this case).

console.log(returnNums(100, 200, 300, 400));

function returnSingleValue(arr) {
    return arr[2];
}

let myArr = [100, 200, 300, 400]

console.log(returnSingleValue(myArr));


const myObj = {
    name: "Alex Jones",
    age: 25,
    residence: "Los Angeles"
}

function objValue(obj) {
    return {age: obj.age, name: obj.name};
}

console.log(objValue(myObj));
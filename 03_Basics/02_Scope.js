var num3 = 40;
let num1 = 50;
if(true) {
    let num1 = 10;
    const num2 = 20;
    var num3 = 30;
    // console.log("Inner num1: ", num1); // 10
    
}

// console.log(num1);
// console.log(num2);
// console.log(num3); // Only num3 will be printed because var is not block scoped. It also overrides any previously declared global variable with the same name, since it is not bound within the scope of that function.

// console.log("Outer num1: ", num1); // 50


function funcOne(){
    const numOne = 15;
    function funcTwo() {
        const numTwo = 20;
        console.log("NumOne in funcTwo: ", numOne);
    }
    console.log("NumOne in funcOne: ", numOne);
    // console.log("NumTwo in funcOne: ", numTwo); // Error

    funcTwo();
}

// console.log("NumOne in global scope: ", numOne); // Error
// console.log("NumTwo in global scope: ", numTwo); // Error

funcOne();


if (true) {
    const name1 = "hello"
    if (true) {
        const name2 = " world"
        const name3 = name1 + name2;
    }
}

// console.log(name3); // Error

// *********************** Important regarding function declaration *************************

console.log(addOne(5)); // Calling it before the declaration is valid.
function addOne(num) {
    return num + 1;
}

console.log(addTwo(5)); // Calling this function before it's declaration throws an error. 

const addTwo = function(num) { // This kind of function is also called an expression sometimes, because of the way it is declared. Calling it before it's declaration throws an error.
    return num + 2;
}





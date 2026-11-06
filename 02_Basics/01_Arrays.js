const myArr1 = [1, 2, 3, 4, 5, 6, 7]

// console.log(myArr1);
// console.log(myArr1[2]);

// myArr1.push(8);
// console.log(myArr1);
// myArr1.pop();
// console.log(myArr1);


// console.log(myArr1.length);
// console.log(myArr1.forEach((element) => console.log(element)));

// console.log(myArr1.includes(4));
// console.log(myArr1.indexOf(4));

// myArr1.unshift(0); //Adds the element to the beginning of the array.
// console.log(myArr1);

// myArr1.shift(); //Removes the element at the beginning of the array.
// console.log(myArr1);

console.log("Before Slicing: ", myArr1.join(", "));
console.log("Slice result: ", myArr1.slice(1, 4).join(", "));

console.log("After Slicing: ", myArr1.join(", "));

console.log("Before Splicing: ", myArr1.join(", "));
console.log("Splice result: ", myArr1.splice(1, 4).join(", "));

console.log("After Splicing: ", myArr1.join(", "));






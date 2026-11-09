// let youtubeUser = {} // Object declaration using literals

let youtubeUser = new Object({
    name: "alex jones",
    email: "alex@gmail.com",
    isMarried: false
});

youtubeUser.age = 26;

// console.log(youtubeUser);

const userInfo = {
    fullName: {
        firstName: "Alan",
        lastName: "Jones"
    },
    age: 24
}

// console.log(userInfo.fullName.firstName);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {2: 'c', 3: 'd'} // 2: 'c' overwrites 2: 'b'
const obj3 = {4: 'e', 5: 'f'}

// Object.assign(target object, ...source objects)
// const obj4 = Object.assign({}, obj1, obj2, obj3);

const obj4 = {...obj2, ...obj3, ...obj1}; // Using the Spread operators

// Changing the sequence of the objects doesn't change the output.
// console.log(obj4);
// console.log(Object.keys(youtubeUser));
// console.log(Object.values(youtubeUser));
// console.log(Object.entries(youtubeUser));

// console.log(youtubeUser.hasOwnProperty('isMarried')); // To check whether an object has the following property.

const prices = {
    laptop: 50000,
    phone: 20000,
    headphones: 3000
};

const filteredPrices = Object.fromEntries(Object.entries(prices).filter(([key, value]) => value > 10000));

// .fromEntries() is used to convert an array into an object. We apply .filter() on that array.

// console.log(filteredPrices);

Object.seal(prices); // Prevents additional properties from being added or removed from the object. But allows to modify the existing properties.

console.log(Object.isFrozen(prices)); // To check if an object is frozen
console.log(Object.isSealed(prices)); // To check if an object is sealed

// Note: freeze() and seal() are shallow. Nested objects can still be modified.

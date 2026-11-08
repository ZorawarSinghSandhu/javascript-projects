// Object declared using object literals -> Not singleton
let testUser = {
    name: "Alex Costa",
    age: 32,
    email: "alex.costa@google.com",
    favourite_places: ["Miami", "Brazil", "Singapore"],
    "Martial Status": "Engaged"
}

// Object.create() -> Object declared using Constructor -> Singleton

// 2 ways of accessing properties of an object -> using dot operator (.) or using square brackets []
// Square brackets are preferred as keys can be defined using single or double quotes, due to which they can't be accessed using the dot operator.

console.log(testUser.email)
// console.log(testUser."Martial Status") // Incorrect

console.log(testUser["Martial Status"]);

const myKey = Symbol("mykey")

let testUser2 = {
    name: "Jack Dunlop",
    age: 30,
    email: "jack.dunlop@google.com",
    favourite_places: ["Dubai", "India", "Singapore"],
    "Martial Status": "Single",
    [myKey]: "mykey1",
}

// console.log(testUser2[myKey]);
// console.log(testUser2);


// console.log(typeof testUser2[myKey]);

// Object.freeze(testUser2);
testUser2.name = "Alex Jones"
testUser2.email = "alex.jones@gmail.com"
// testUser2["favourite_places"] = []

console.log(testUser2);

testUser2.greeting = function(){
    console.log(`Hello , how are you ${this.name}`);
}

console.log(testUser2);
testUser2.greeting()

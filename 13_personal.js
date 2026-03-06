// Working with destructuring and spread operator.

// Object.
const value1 = {a: "Jude", b: "Tired"};

// Object destructured.
const {a: name, b: status} = value1;

// Print message.
console.log(`${name} is very ${status}`);

// List.
const arr1 = ["sleepy", "hungry"];

// Second List with spread operator joining the first list to it.
const arr2 = [...arr1, "broke", "single"];

// Print message.
console.log(`${name} is also very ${arr2}`);
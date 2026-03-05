const value1 = {a: "Jude", b: "Tired"};

const {a: name, b: status} = value1;

console.log(`${name} is very ${status}`);


const arr1 = ["sleepy", "hungry"];

const arr2 = [...arr1, "broke", "single"];

console.log(`${name} is also very ${arr2}`);
// Understanding .reduce

let arr = [4, 5, 6, 8, 9];

let result1 = arr.reduce((acc, cur) => acc + cur, 0)

console.log(`Result of normal JS reduce - ${result1}`);

Array.prototype.judeReduce = function(myCallback, initialValue) {

    let accumulatedValue = initialValue;

    for(let i = 0; i < this.length; i++) {
        accumulatedValue = myCallback(accumulatedValue, this[i]);
    }

    return accumulatedValue;
}


let result2 = arr.judeReduce((acc, cur) => acc + cur, 0);

console.log(`Result of normal JS reduce - ${result2}`);
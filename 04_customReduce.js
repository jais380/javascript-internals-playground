// Understanding .reduce

let arr = [4, 5, 6, 8, 9];

// using normal .reduce()

let result1 = arr.reduce((acc, cur) => acc + cur, 0)

console.log(`Result of normal JS reduce - ${result1}`);



Array.prototype.judeReduce = function(myCallback, initialValue) {

    // set the initial value of 0 to be the first accumulated value
    let accumulatedValue = initialValue;


    // iterates the accumulated value and each value of the array
    for(let i = 0; i < this.length; i++) {

        // quick way to assign the returned value of the callback to be the new accumulated value
        accumulatedValue = myCallback(accumulatedValue, this[i]);
    }

    return accumulatedValue;
}


// using my custom .judeReduce()
let result2 = arr.judeReduce((acc, cur) => acc + cur, 0);

console.log(`Result of normal JS reduce - ${result2}`);
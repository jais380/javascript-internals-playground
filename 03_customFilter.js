//Understanding javascript filtering

let arr = [2, 3, 6, 8, 4, 5, 8, 9, 0, 1];

const result1 = arr.filter((num) => num % 2 === 0 && num !== 0);

console.log(`Result of normal JS filter - ${result1}`);


// Recreating Filter()

Array.prototype.judeFilter = function(myCallback) {
    let newArr = [];

    // Iterates each value of the array
    for(let i = 0; i < this.length; i++){

        // Passes the value and Checks if the callback funtion returns True
        if(myCallback(this[i])){

            // adds the value to the new array
            newArr.push(this[i]);
        }
        else {

            // skips the value if the callback function returns False
            continue;
        }
    }

    // returns new array to judeFilter
    return newArr;
}

const result2 = arr.judeFilter((num) => num % 2 === 0 && num !== 0);

console.log(`Result of my custom filter - ${result2}`);
//.Map deep dive through cloning

let arr = [1, 2, 3, 6, 9, 2, 4];

class myArray{
    constructor(arr) {
        this.arr = arr;
        this.newArr = [];
    }

    judeMap(myCallback) {
        let x = this.arr;
        let y = this.newArr;

        // Iterates each value of the array
        for(let i = 0; i <= x.length - 1; i++) {

            // Transforms each value of the array via callback
            let transformedValue = myCallback(x[i]);


            // Appends all the transformed values into a new array
            y.push(transformedValue);
        }
    }
}


// Creating new object
let res = new myArray(arr);

// Mapping demo - returns object of arr and newArr
res.judeMap((num) => num * 2);

// Prints only newArr
console.log(res.newArr);
//.Map deep dive through cloning

let arr = [1, 2, 3, 6, 9, 2, 4];

function myArray(arr) {
    let newArr = [];
    this.judemap = function (callback) {
        for(let i = 0; i < this.length - 1; i++) {

            let transformedValue = callback(arr[i]);

            newArr.push(transformedValue);
        }

        return newArr;
    }
}

console.log(myArray);

let res = myArray(arr).judemap((num) => num + 1);

console.log(res);
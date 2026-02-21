Array.prototype.judeMap = function (myCallback) {

    let arr = [];

    // Iterates each value of the array
    for(let i = 0; i < this.length; i++) {

        // Transforms each value of the array via callback and pushes it into the array
        arr.push(myCallback(this[i]));
    }

    return arr;
}


const numList = [1, 2, 3, 4];

const res = numList.judeMap((num) => num * 100);

console.log(res)
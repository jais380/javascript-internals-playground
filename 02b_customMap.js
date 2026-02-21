Array.prototype.judeMap = function (myCallback) {

    let arr = [];

    for(let i = 0; i <
        this.length; i++) {

        arr.push(myCallback(this[i]));
    }

    return arr;
}


const numList = [1, 2, 3, 4];

const res = numList.judeMap((num) => num * 100);

console.log(res)
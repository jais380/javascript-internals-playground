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
        for(let i = 0; i <= x.length - 1; i++) {

            let transformedValue = myCallback(x[i]);

            //console.log(transformedValue);

            y.push(transformedValue);
        }

        //console.log(y);

        return y;
    }
}



let res = new myArray(arr);

res.judeMap((num) => num * 2);

console.log(res.newArr);
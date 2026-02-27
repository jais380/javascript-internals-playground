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


// List of Users data
const users = [
    {name: 'Jude', age: '88', hasSubscription: true, role: 'admin'},
    {name: 'Simon', age: '9', hasSubscription: false, role: 'guest'},
    {name: 'John', age: '44', hasSubscription: true, role: 'guest'},
    {name: 'Jimmy', age: '16', hasSubscription: false, role: 'admin'},
    {name: 'Roland', age: '14', hasSubscription: true, role: 'guest'},
    {name: 'Cynthia', age: '33', hasSubscription: false, role: 'guest'},
    {name: 'Drago', age: '25', hasSubscription: true, role: 'guest'}
]


// .map() used to perform middleware checks to display status message for different users
const statusMessages = users.map((user) => user.role === 'admin' ? "Access Granted: Welcome Boss" :

            user.hasSubscription && user.age > 18 ? "Access Granted: Enjoy the Pro features" : "Access Denied: Please upgrade or check age");


console.log(statusMessages);
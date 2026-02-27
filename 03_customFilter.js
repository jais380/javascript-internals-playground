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
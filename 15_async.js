// Set Timeout use case.
setTimeout(() => {console.log("I am Atomic!!");}, 0);

// Promises use case
async function getUsersFromFacebook() {
    const prom = new Promise((resolve, reject) => {
        let users = [{name:"Jude", age:0}, {name:"Johnny", age:99}];

        if(users.length>0) {
            resolve(data = {response:users, message:"Success!!!"});
        }else {
            reject(errorMessage = {Error:"Better Luck next time :( "});
        }
    });
    return prom;
}

// Handling data returned by promise.
getUsersFromFacebook().then((data) => {
    console.log(data);

    return data.response[1];
})
.then((res) => {
    console.log(res.name);
})
.catch((err) => {
    console.log(err);
})

// Normal print.

console.log(`I am the first!!`);
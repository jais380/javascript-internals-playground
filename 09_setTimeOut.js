// UNDERSTANDING setTimeout

// SIXTH/LAST TO PRINT
setTimeout(() => {
    console.log('Javascript');
}, 1000)


// FIRST TO PRINT
console.log("Jude");


// FOURTH TO PRINT
setTimeout(() => {
    console.log('Async');
}, 0)


// SECOND TO PRINT
console.log(60);


// FIFTH TO PRINT
setTimeout(() => {
    console.log('in');
}, 0)


// THIRD TO PRINT
console.log(105);
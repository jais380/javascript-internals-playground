const arr = ['Beginning', 'the', 'just', 'is', 'This'];




intro(arr);




function intro(arr) {

    let newArr = [];

    for(let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    message = newArr.join(' ');

    console.log(`BE AWARE: ${message}`);
}
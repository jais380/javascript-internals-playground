//List of users
users = ['Jude', 'Judith', 'Jimmy', 'Roland', 'Ayo'];


//Loop through each list and its index
users.forEach((user, index) => {

    //Apply setTimeout for delayed response
    setTimeout(() => {

        // Ternary Operator to print necessary output
        let userLog = user === 'Jude' ? `Scanning Admin ${user}...` : `Scanning Guest ${user}...`;

        // Print the user log, watch the magic
        console.log(userLog);

    }, index*2000)
})
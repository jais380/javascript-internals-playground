users = ['Jude', 'Judith', 'Jimmy', 'Roland', 'Ayo'];

users.forEach((user, index) => {
    setTimeout(() => {
        let userLog = user === 'Jude' ? `Scanning Admin ${user}...` : `Scanning Guest ${user}...`;

        console.log(userLog);

    }, index*2000)
})
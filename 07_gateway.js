const users = [
    {name: 'Jude', age: '88', hasSubscription: true, role: 'admin'},
    {name: 'Simon', age: '9', hasSubscription: false, role: 'guest'},
    {name: 'John', age: '44', hasSubscription: true, role: 'guest'},
    {name: 'Jimmy', age: '16', hasSubscription: false, role: 'admin'},
    {name: 'Roland', age: '14', hasSubscription: true, role: 'guest'},
    {name: 'Cynthia', age: '33', hasSubscription: false, role: 'guest'},
    {name: 'Drago', age: '25', hasSubscription: true, role: 'guest'}
]

const statusMessages = users.map((user) => user.role === 'admin' ? "Access Granted: Welcome Boss" :

            user.hasSubscription && user.age > 18 ? "Access Granted: Enjoy the Pro features" : "Access Denied: Please upgrade or check age");


console.log(statusMessages);
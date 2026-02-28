// Users data
users = [
    {username: 'Jude', isOnline: true, notifictionsEnabled: true, securityLevel: 'high'},
    {username: 'Johnny', isOnline: true, notifictionsEnabled: false, securityLevel: 'low'},
    {username: 'Jimmy', isOnline: false, notifictionsEnabled: true, securityLevel: 'high'},
    {username: 'John', isOnline: true, notifictionsEnabled: true, securityLevel: 'low'},
    {username: 'Jane', isOnline: true, notifictionsEnabled: false, securityLevel: 'low'},
    {username: 'Joshua', isOnline: false, notifictionsEnabled: false, securityLevel: 'high'},
    {username: 'Judy', isOnline: false, notifictionsEnabled: true, securityLevel: 'low'},
    {username: 'Judith', isOnline: false, notifictionsEnabled: false, securityLevel: 'low'},
];

// Instructions to be executed when certain conditions are met
const instructions = users.map((user) => {
    return !user.notifictionsEnabled
        ? "Mute: User opted out"
        : user.isOnline
            ? "Send Push: Real-time alert"
            : user.securityLevel === 'high'
                ? "Send Email: Urgent security alert"
                : "Queue: Save for later login"
});

// print final result
console.log(instructions);
// Simulated Backend Log data
const serverLogs = [
  { timestamp: '10:00:01', status: '200', ip: '192.168.1.1', message: 'Login Success' },
  { timestamp: '10:00:05', status: '401', ip: '10.0.0.50', message: 'Invalid Password' },
  { timestamp: '10:00:07', status: '401', ip: '10.0.0.50', message: 'Invalid Password' },
  { timestamp: '10:00:10', status: '200', ip: '192.168.1.5', message: 'Login Success' },
  { timestamp: '10:00:15', status: '401', ip: '172.16.0.1', message: 'User Not Found' }
];


// Filter out all failed attempts
const errorLog = serverLogs.filter((data) => data.status === '401');

// Retrieve IPs of failed attempts
const blackListIps = errorLog.map((data) => data.ip);

// Log the number of failed attempts for each IP

const ipCount = blackListIps.reduce((acc, IP) => {
    acc[IP] = (acc[IP] || 0) + 1;
    return acc;
}, {});


console.log("---Error Logging---");

console.log("Blacklisted IPs -> ", blackListIps);

console.log("---Retry Counting---");

console.log("No. of tries -> ", ipCount);
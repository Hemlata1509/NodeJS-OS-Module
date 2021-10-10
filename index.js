var os = require('os');
console.log("\nFollowing are the information about the Computer's operating system:");
console.log("\nOS CPU architecture Architecture: " + os.arch());
console.log("\nFree memory of the system: " + Math.round(((os.freemem() / 1024 / 1024 / 1024) * 100)) / 100 + " GB");
console.log("\nTotal memory of the system: " + Math.round(((os.totalmem() / 1024 / 1024 / 1024) * 100)) / 100 + " GB");
console.log("\nOS Platform: " + os.platform());
console.log("\nCurrent User is: " + os.userInfo().username);
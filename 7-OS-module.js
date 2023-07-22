//OS is a Bult-in module
const OS = require('os')

//Info about the current user
const user = OS.userInfo()
const currentOS = {
	name: OS.type(),
	release: OS.release(),
	totalMem: OS.totalmem(),
	freeMem: OS.freemem(),
}

//method returns the system run time
console.log(`The System Uptime is ${OS.uptime()} seconds`);

console.log(user);
console.log(currentOS);


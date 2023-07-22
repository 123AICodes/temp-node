//Sync
const { readFileSync, writeFileSync } = require('fs')
console.log("start");

const firstFile = readFileSync('./content/file/first.txt', 'utf8');
const secondFile = readFileSync('./content/file/second.txt', 'utf8');

writeFileSync('./content/result-sync.txt', `Here is the result : 
	${firstFile}, ${secondFile}`, { flag: 'a' }
)
console.log(`done with the task`);
console.log(`starting the next one`);



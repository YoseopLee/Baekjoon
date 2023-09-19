const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
input.shift();
input.map(x => console.log(x.substring(0, 1) + x.substring(x.length - 1, x.length)));
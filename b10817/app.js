const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ').map(v=>+v);
input.sort((a,b) => a-b);
console.log(input[input.length - 2]);
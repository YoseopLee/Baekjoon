const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ').map(v => Math.pow(v, 2));
console.log(input.reduce((a,b) => a+b) % 10);
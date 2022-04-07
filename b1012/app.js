const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const T = Number(input.shift());
const [M, N, K] = input.shift().split(' ').map(v=>+v);
console.log(M, N, K);
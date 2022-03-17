const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const [N, M] = input.shift().split(' ').map(v=>+v);
const squares = input.join('\n');

console.log(N, M);
console.log(squares);
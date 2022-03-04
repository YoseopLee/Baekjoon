const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n').map(v=>+v);
const K = input.shift();
let stack = [];
for (let i = 0; i < K; i++) {
    input[i] !== 0 ? stack.push(input[i]) : stack.pop();
}
const initialVal = 0;
const sum = stack.reduce((a,b) => a+b, initialVal);
console.log(sum);
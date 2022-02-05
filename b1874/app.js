const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(v=>+v);

const n = Number(input.shift());

console.log(n);
console.log(input);

const arr1 = [];
const stack = [];
let answer = '';

for (let i = 1; i <= n; i++) {
    arr1.push(i);
}

console.log(arr1);
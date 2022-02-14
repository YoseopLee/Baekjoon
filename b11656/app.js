const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('');

const stack = [...input];
const stack2 = [];
let answer = [];

for (let i = 0; i < input.length; i++) {
    stack2.unshift(stack.pop());
    answer.push(stack2.join('').trim());
}

console.log(answer.sort().join('\n').trim());
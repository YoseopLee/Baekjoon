const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
input.pop();

let A = [];
let stack = [];

for (let i = 0; i < input.length; i++) {
    A.push(input[i].split(''));

    for (let j = 0; j < A[i].length; j++) {
        if (A[i][j] === '(' || A[i][j] === '[' || A[i][j] === ')' || A[i][j] === ']') {
            stack.push(A[i][j]);
        }
    }
}

console.log(stack);
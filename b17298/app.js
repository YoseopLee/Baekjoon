const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const N = parseInt(input[0]);
const A = input[1].split(' ').map(v => +v);
let stack = []; // 빈 stack 선언 
for (let i = 0 ; i < A.length; i++) {
    while (stack.length && A[stack[stack.length - 1]] < A[i]) {
        A[stack.pop()] = A[i];
    }
    stack.push(i);
}
while (stack.length) {
    A[stack.pop()] = -1;    
}
console.log(A.join(' '));
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
input.pop();
const A = ['(', '['];
const B = [')', ']'];
let answer = [];

input.forEach(v => { // input의 각 요소 (각 문장) 을 v로 할당
    let res = false; 
    let stack = [];
    for (let i = 0; i < v.length; i++) {
        if (A.includes(v[i])) {
            stack.push(v[i]);
        } else if (B.includes(v[i])) {
            if (stack.pop() !== A[B.indexOf(v[i])]) {
                answer.push('no');
                res = true;
                break;
            }
        }
    }
    if (!res) {
        if (stack.length === 0) { 
            answer.push('yes');
        } else {
            answer.push('no');
        }
    }
})
console.log(answer.join('\n'));
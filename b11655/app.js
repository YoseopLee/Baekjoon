const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const S = input.split('');
let nums = '';

for (let i = 0; i < S.length; i++) {
    if (S[i] >= 'a' && S[i] <= 'z') {
        nums += S[i].charCodeAt() + 13 + ' ';
    } else if (S[i] >= 'A'&& S[i] <= 'Z') {
        nums += S[i].charCodeAt() + 13 + ' ';
    } else if (S[i] === ' ') {
        nums += S[i];
    } else if (S[i] >= '0' && S[i] <= '9') {
        nums += Number(S[i]);
    }
}

const A = nums.split(' ');
console.log(A);
let answer = '';
for (let i = 0; i < A.length; i++) {
    if (A[i] > '122') {
        answer += String.fromCharCode(A[i] - 26);
    } else if (A[i] >= '65' && A[i] <= '77') {
        answer += String.fromCharCode(A[i] + 13);
    } else if (A[i] >= '78' && A[i] <= '90') {
        answer += String.fromCharCode(A[i] - 13);
    } else if (A[i] === '') {
        answer += ' ';
    } else {
        answer += String.fromCharCode(A[i]);
    }
    
}

console.log(answer);
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const L = Number(input[0]);
const S = input[1].split('');
let r = 1;
let answer = 0;
for (let i = 0; i < L; i++) {
    answer += (S[i].charCodeAt() - 96) * r;
    answer %= 1234567891;
    r *= 31;
    r %= 1234567891;
}
console.log(answer);
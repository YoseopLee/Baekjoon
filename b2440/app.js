const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString()
const N = +input;
let answer = '';
for (let i = N; i >= 1; i--) {
    answer += '*'.repeat(i) + '\n'; 
}
console.log(answer.trim());
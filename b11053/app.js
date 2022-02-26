const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const A = Number(input[0]);
const AI = input[1].split(' ').map(v=>+v);
let dp = Array(A).fill(1);
for (let i = 1; i < A; i++) {
    let arr = [1];
    for (let j = 0; j < i; j++) {
        if (AI[i] > AI[j]) {
            arr.push(dp[j] + 1);
        }
    }
    dp[i] = Math.max(...arr);
}
console.log(Math.max(...dp));
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const N = Number(input[0]);
const A = input[1].split(' ').map(v=>+v);
A.unshift(0);
let dp = Array(N + 1);
dp[0] = A[1];
dp[1] = A[1];
for (let i = 2; i <= N; i++) {
    if (dp[i - 1] + A[i] >= A[i]) {
        dp[i] = dp[i - 1] + A[i];
    } else {
        dp[i] = A[i];
    }
}
console.log(Math.max(...dp));
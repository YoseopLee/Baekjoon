const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();
const N = +input;
const dp = [];
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
dp[3] = 3;
//dp[4] = 5;
//dp[5] = 8;
// dp[i] = dp[i - 1] + dp[i - 2];
for (let i = 3; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] % 15746;
}
console.log(dp[N]);
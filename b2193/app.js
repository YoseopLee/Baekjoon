const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();

const N = Number(input);
let dp = [[0,0], [0,1], [1,0]];
for (let i = 3; i <= N; i++) {
    dp[i] = [BigInt(dp[i - 1][0]) + BigInt(dp[i - 1][1]), BigInt(dp[i - 1][0])];
}

console.log((BigInt(dp[N][0]) + BigInt(dp[N][1])).toString());
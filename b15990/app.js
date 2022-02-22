const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n').map(v=>+v);
const T = input.shift();
let dp = [[0,0,0], [1,0,0], [0,1,0], [1,1,1]];
for (let i = 4; i <= Math.max(...input); i++) {
    dp[i] = [(dp[i - 1][1] + dp[i - 1][2]) % 1000000009, (dp[i - 2][0] + dp[i - 2][2]) % 1000000009, (dp[i - 3][0] + dp[i - 3][1]) % 1000000009]
}
for (let i = 0; i < T; i++) {
    console.log(dp[input[i]].reduce((l, v) => l + v, 0) % 1000000009);
}
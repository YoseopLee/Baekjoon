const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input.shift();
const inputs = input.map(v=>+v);
const dp = new Array(N).fill(0);
dp[0] = inputs[0]; // 20;
dp[1] = Math.max(inputs[0] + inputs[1], inputs[1]);
dp[2] = Math.max(inputs[0] + inputs[2], inputs[1] + inputs[2]);
for (let i = 3; i < N; i++) {
    dp[i] = Math.max(inputs[i] + inputs[i - 1] + dp[i - 3], inputs[i] + dp[i - 2]);
}
console.log(dp[N - 1]);
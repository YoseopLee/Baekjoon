const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const N = Number(input[0]);
const P = input[1].split(' ').map(v=>+v);
let dp = [0, ...P];
for (let i = 2; i < dp.length; i++) {
    for (let j = 1; j < i; j++) {
        dp[i] = Math.min(dp[i], (dp[i-j] + dp[j]));
    }
}
console.log(dp[N]);
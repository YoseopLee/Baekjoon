const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();
const n = Number(input);
const dp = [0, 1];
for (let i = 2; i <= n; i++) {
    let min = Infinity;
    let j = 1;
    while(i >= j**2) {
        min = Math.min(min, dp[i - j**2]);
        j++;
    }
    dp.push(min + 1);
}
console.log(dp[n]);
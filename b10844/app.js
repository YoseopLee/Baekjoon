const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();

const N = Number(input);
let dp = [];
dp[0] = [];
dp[1] = new Array(10).fill(1);
dp[1][0] = 0;
for (let i = 1; i <N; i++) {
    dp[i + 1] = new Array(10).fill(0);
    dp[i + 1][1] += dp[i][0] % 1000000000;
    for (let j = 1; j < dp[i].length - 1; j++) {
        dp[i + 1][j - 1] += dp[i][j] % 1000000000;
        dp[i + 1][j + 1] += dp[i][j] % 1000000000;
    }
    dp[i + 1][8] += dp[i][9] % 1000000000;
}
console.log(dp[N].reduce((n,m) => n+m, 0) % 1000000000);
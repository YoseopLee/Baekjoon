const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();

let N = Number(input); // 연산해야하는 수
let dp = [0, 0]; // 0, 1은 어짜피 연산 횟수 0
dp[2] = 1; // N이 2이면 나누기 2 한번만 해주면 됨 => 1번
dp[3] = 1; // N이 3이면 나누기 3 한번만 해주면 됨 => 1번
dp[4] = 2; // 4 / 2 - 1 연산 2번
dp[5] = 3; // (5 - 1) / 2 - 1 = 1 연산 3번
dp[6] = 2; // 연산 2번
dp[7] = 3;  // 연산 3번

for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + 1; // 1을 뺏으니 경우의 수에서 1추가
    if (i % 3 === 0) {
        dp[i] = Math.min(dp[i / 3] + 1, dp[i]); // 3으로 한번 나눴기 때문에 + 1
    }
    if (i % 2 === 0) {
        dp[i] = Math.min(dp[i / 2] + 1, dp[i]); // 2로 한번 나눴기 때문에 + 1
    }
}
console.log(dp[N]);
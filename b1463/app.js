const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();

let N = Number(input); // 연산해야하는 수
let dp = new Array(N + 1).fill(0); 

for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + 1;  // dp 배열의 인덱스는 숫자를 뜻함. dp 배열에 계속 연산한 숫자의 최솟값을 집어넣는 방식
    if (i % 2 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    } 
    if (i % 3 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
}

console.log(dp[N]);
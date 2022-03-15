const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input.shift();
const S = input.map(v=>+v);
const dp = Array(N).fill(0); // 계단이 N개일 때 , 최댓값을 담을 배열 선언.
dp[0] = S[0]; // 계단 1개일 때 => 첫번째 계단 점수
dp[1] = S[0] + S[1]; // 계단 2개일 때 => 첫번째 계단 점수 + 두번째 계단 점수
dp[2] = Math.max(S[0] + S[2], S[1] + S[2]); // 계단 3개일 때 => 1+3계단, 2+3계단 점수 중 높은거 선택
console.log(dp);
for (let i = 3; i < N; i++) { // 관계식 만들어줌.
    dp[i] = Math.max(S[i] + S[i - 1] + dp[i - 3], S[i] + dp[i - 2]); // 계단 4개일 떄 => 1+3+4 계단, 1+2+4계단 중 점수 높은 거 선택.
}

console.log(dp[N - 1]); // dp의 마지막 요소가 계단 N개일 떄 최댓값 ? dp[dp.length - 1]이 왜 안될까?
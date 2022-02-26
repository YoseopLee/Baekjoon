const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const A = Number(input[0]);
const AI = input[1].split(' ').map(v=>+v);
const dp = Array(A).fill(0);

for (let i = 0; i < A; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
        if (AI[i] > AI[j] && dp[j] > max) {
            max = dp[j];
        }
    }
    dp[i] = max + 1;
}

const maxDP = Math.max(...dp);
console.log(maxDP);
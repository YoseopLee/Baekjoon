const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const A = Number(input[0]);
const AI = input[1].split(' ').map(v=>+v);
let dp = Array(A).fill(1);
let arr = [];
for (let i = 0; i < A; i++) {
    let maxIdx = -1;
    let max = 0;
    for (let j = 0; j < i; j++) {
        if (AI[i] > AI[j] && dp[j] > max) {
            max = dp[j];
            maxIdx = j;
        }
    }
    dp[i] = max + 1
    arr[i] = maxIdx !== -1 ? arr[maxIdx].concat(AI[i]) : [AI[i]];
}
const maxDP = Math.max(...dp);
console.log(maxDP);
console.log(arr[dp.indexOf(maxDP)].join(' '));
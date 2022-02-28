const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);
const M = Number(input[2]);
const A = input[1].split(' ');
const B = input[3].split(' ');
let answer = '';

for (let i = 0; i < M; i++) {
    let count = 0;
    for (let j = 0; j < N; j++) {
        if (A[j] === B[i]) {
            count++;
        }
    }
    answer += count + '\n';
}
console.log(answer);
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();

const N = parseInt(input);

solution(N);

function solution(N) {
    let T = 1;
    for (let i = N; i >= 2; i--) {
        T *= i;
    }
    console.log(T);
}
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ');

const M = Number(input[0]);
const N = Number(input[1]);

solution(M,N);

function solution(M,N) {
    console.log(M, N);
    
}


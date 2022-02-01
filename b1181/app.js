const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input.shift());

solution(N);

function solution(N) {
    let L = [];
    for (let i = 0; i < N; i++) { // 탐색
        for(let j = 0; j < input[i].length; j++) {
            L.push(input[i].charCodeAt(j));
        }
    }
    console.log(L);
}
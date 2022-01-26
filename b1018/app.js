const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input[0].split(' ')[0]);
const M = Number(input[0].split(' ')[1]);

solution(N, M);

function solution(N, M) {
    console.log(N, M); // 10 13
    let count = 0; // 색칠하는 정사각형 갯수
    let squred = [];
    
    for (let i = 1; i <= N; i++) {
        for (let j = 0; j < M; j++) {
            squred.push(input[i].split('')[j]);
        }
    }
    console.log(squred);

    
    
}
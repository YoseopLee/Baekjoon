const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const N = Number(input[0]);
const M = Number(input[1]);

solution(N, M);

function solution() {
    let primeArray = Array(M + 1).fill(true); // 0부터 M까지 true로 채운 배열 선언
    primeArray[0] = primeArray[1] = false;  // 0, 1은 소수가 아님.
    
    for (let i = 2; i <= Math.ceil(Math.sqrt(M)); i++) {
        if (primeArray[i]) {
            let l = 2;
            while (i * l <= M) {
                primeArray[i * l] = false;
                l++;
            }
        }
    }
    
    const result = [];

    for (let i = N; i <= M; i++) {
        if(primeArray[i]) {
            result.push(i);
        }
    }

    console.log(result.join('\n'));
}
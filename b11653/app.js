const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input);

solution(N);

function solution(N) {
    let originNumber = N;
    let primeArray = [];
    let primeNum = 2;

    while (true) {
        if (originNumber === 1) {
            break;
        } else {
            if (N !== 1) {
                if (N % primeNum === 0){
                    primeArray.push(primeNum);
                    N = N / primeNum;
                } else {
                    primeNum++;
                }
            } else {
                break;
            }
        }
    }

    if (primeArray.length !== 0) {
        console.log(primeArray.join('\n'));
    }
}
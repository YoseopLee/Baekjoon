const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const M = Number(input[0]);
const N = Number(input[1]);

solution(M, N);

function solution(M, N) {
    let inputArray = [];

    for (let i = M; i <= N; i++){
        inputArray.push(i);
    }

    // 아리스토테네스의 채를 사용해서 소수 판별 함수 만듬
    const isPrime = (n) => {
        if (n < 2) { // n이 2보다 작으면 그냥 소수가 아님.
            return false; //
        }
        
        for (let i = 2; i <= Math.sqrt(n); i++) { // 2부터 n의 제곱근까지 1씩 증가
            if (n % i === 0) { // n이 i로 나누어 떨어지면 소수가 아님.
                return false;
            }
        }
        return true;
    };

    let sum = 0;
    let min = [];
    inputArray.map((n) => {
        if (isPrime(n)) {
            min.push(n);
            sum += n;
        }
    });

    if (min[0] > 0 || sum > 0) {
        console.log(sum);
        console.log(min[0]);
    } else {
        console.log(-1);
    }
}
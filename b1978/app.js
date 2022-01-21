const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const N = Number(input.shift()); // 배열의 첫번째 요소를 뽑아냄. input[0]과는 다름

solution(N)

function solution(N) { // N 은 4

    // 소수를 판별하는 함수
    const isPrime = (n) => { // n 은 1 3 5 7
        if (n < 2) {
            return false;
        }
        
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true; // 위 경우 외에 나머지는 소수이므로 true로 return
    };

    const nums = input[0].split(' ').map(n => Number(n)); // [1,3,5,7] 숫자 배열로 만들어줌
    let count = 0; // 소수의 갯수를 나타내는 변수 선언
    for (let i = 0; i < N; i++) { // 주어진 테스트케이스 갯수만큼 반복
        if(isPrime(nums[i])) { // 만약 nums가 반복되면서 소수가 있으면 count 변수에 +1 씩 해줌.
            count += 1;
        }
    }
    
    console.log(count); // 최종적으로 count 찍어냄.
}
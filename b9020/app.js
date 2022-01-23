const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);

for (let i = 1 ; i <= T; i++) {
    let n = Number(input[i]);
    let isPrimeArray = Array(n + 1).fill(true);
    isPrimeArray[0] = isPrimeArray[1] = false;
    
    // 에라토스테네스의 채로 소수 판별하는 함수
    const isPrime = () => {
        for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
            if (isPrimeArray[i]) {
                let l = 2;
                while (i * l <= n) {
                    isPrimeArray[i * l] = false;
                    l++;
                }
            }
        }

        // 주어진 수의 소수를 담아둔 배열
        let primeArray = [];
        for (let i = 2; i <= n; i++) {
            if (isPrimeArray[i]) {
                primeArray.push(i);
            }
        }

        let answer = []; // 골드바흐 파티션을 저장할 배열 선언

        for (let i = 0; primeArray[i] < n / 2 + 1; i++) { // 주어진 수의 절반보다 작은 소수만 탐색
            const index = primeArray.indexOf(n - primeArray[i]); // (주어진 수 - 소수)가 소수인지
            if(index !== -1) { // 소수라면 ?
                answer.push([primeArray[i], primeArray[index]]); // 골드바흐 파티션이므로 배열에 추가
            }
        }

        if (answer.length !== 0) { // 골드바흐 파티션이 존재했다면
            const a = answer.pop(); // 가장 마지막 파티션을 가져옴 (두 소수의 차이가 가장 작음)
            console.log(`${a[0]} ${a[1]}`);
        }
    }
    isPrime();
}
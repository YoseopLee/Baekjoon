const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
input.pop() // input맨 끝줄 지움

for (let i = 0; i < input.length; i++) {  // i = 1;
    let n = Number(input[i]); // n = 10;
    let primeArray = Array(2 * n + 1).fill(true); // 21개의 true로 채워진 배열 생성
    primeArray[0] = primeArray[1] = false; // 그 중에 앞에 2개를 소수가 아니므로 false

    // 에라토스테네스의 체를 사용해서 소수 판별 함수 생성
    const isPrime = () => { 
        for (let i = 2; i <= Math.ceil(Math.sqrt(2 * n)); i++) { // let i = 3; i <= 5; i++
            if (primeArray[i]) { // if(primeArray[i]) === true;
                let l = 2;
                while (i * l <= 2 * n) { // 6 <= 20 
                    primeArray[i * l] = false; // primeArray[6] = false;
                    l++;
                }
            }
        }

        let result = [];

        for (let i = n + 1; i <= 2 * n; i++) {
            if(primeArray[i] === true) { 
                result.push(i) 
            }
        }
        console.log(result.length);
    }
    isPrime();
}
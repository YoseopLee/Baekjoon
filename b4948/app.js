const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
input.pop() // input맨 끝줄 지움

for (let i = 0; i < input.length; i++) {
    let n = Number(input[i]);
    let primeArray = Array(2 * n + 1).fill(true);
    primeArray[0] = primeArray[1] = false;

    // 에라토스테네스의 체를 사용해서 소수 판별 함수 생성
    const isPrime = () => {
        for (let i = 2; i <= Math.ceil(Math.sqrt(2 * n)); i++) {
            if (primeArray[i]) {
                let l = 2;
                while (i * l <= 2 * n) {
                    primeArray[i * l] = false;
                    l++;
                }
            }
        }

        let result = [];

        for (let i = n + 1; i <= 2 * n; i++) {
            if(primeArray[i]) {
                result.push(i)
            }
        }
        console.log(result.length);
    }
    isPrime();
}
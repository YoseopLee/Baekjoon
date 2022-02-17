const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n').map(v=>+v);
input.pop();

for (let i = 0; i < input.length; i++) {
    let n = Number(input[i]);
    let isPrimeArray = Array(n + 1).fill(true);
    isPrimeArray[0] = isPrimeArray[1] = false;

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
    
        let primeArray = [];
        for (let i = 2; i <= n; i++) {
            if (isPrimeArray[i]) {
                primeArray.push(i);
            }
        }

        let left = 0;
        let right = primeArray.length - 1;

        while (left < right) {
            let sum = primeArray[left] + primeArray[right];
            if (sum === n) {
                console.log(n + " = " + primeArray[left] + " + " + primeArray[right]);
                break;
            } else if (sum < n) {
                left++;
            } else if (sum > n) {
                right--;
            }
        }
    }
    isPrime();
}
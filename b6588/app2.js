const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n').map(v=>+v);

const max = Math.max(...input);
const isPrimeArray = new Array(max + 1).fill(false);

for (let i = 2; i <= max; i++) { // 소수는 2부터 시작
    if (!isPrimeArray[i]) { // 소수 체크 (에라스토테네스의 체)
        for (let j = i * i; j <= max; j += i) {
            isPrimeArray[j] = true;
        }
    }
}

let answer = '';
input.map((x) => {
    for (let i = 3; i < x; i += 2) {
        if (!isPrimeArray[i] && !isPrimeArray[x - i]) {
            answer += `${x} = ${i} + ${x - i}\n`;
            break;
        }
    }
});
console.log(answer);
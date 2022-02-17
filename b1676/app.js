const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();

const N = Number(input);

let j = 1;
for (let i = N; i >= 2; i--) {
    j *= i;
}

const check = j.toString().split('');
let count = 0;
for (let i = check.length - 1; i >= 0; i--) {
    if (+check[i]) break;
    count++;
}
console.log(count);
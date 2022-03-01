const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ').map(v=>+v);
const N = input[0];
const K = input[1];
let n = 1;
let m = 1;
let l = 1;
for (let i = N-K+1; i <=N; i++) {
    n *= i;
}

for (let i = 1; i <= K; i++) {
    m *= i;
}
console.log(n/m);
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(v=>+v);

const N = input[0];
const K = input[1];

let A = [];
let B = [];

for (let i = 1; i <= N; i++) {
    A.push(i);
};

for (let i = 0; i < N; i++) {
    for (let j = 1; j <= K; j++) {
        if (j === K) {
            B.push(A.shift());
        } else {
            A.push(A.shift());
        }
    }
}

console.log('<'+ B.join(', ').toString()+'>');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const N = +input[0];
const arr = input[1].split(' ').map(v=>+v);
const v = +input[2];

let answer = 0;

for (let i = 0; i < N; i++) {
    if (arr[i] === v) {
        answer++;
    }
}

console.log(answer);
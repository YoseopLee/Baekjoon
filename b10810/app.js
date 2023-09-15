const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const N = +input[0].split(' ')[0];
const M = +input[0].split(' ')[1];
input.shift();
let answer = Array(N).fill(0);
for (let i = 0; i < M; i++) {
    let [start, end, k] = input[i].split(' ').map(v=>+v)
    for (start; start <= end; start++) {
        answer[start-1] = k;
    }
}
console.log(answer.join(' '));
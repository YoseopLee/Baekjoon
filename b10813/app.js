const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const [N, M] = input[0].split(' ').map(v=>+v);
input.shift();
let answer = [];
for (let i = 1; i <= N; i++) {
    answer.push(i);
}

for (let i = 0; i < M; i++) {
    let [x, y] = input[i].split(' ').map(v=>+v);
    let k = 0;
    k = answer[x-1];
    answer[x-1] = answer[y-1];
    answer[y-1] = k;
}

console.log(answer.join(' '));
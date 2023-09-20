const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const [N, M] = input[0].split(' ').map(v=>+v);
input.shift();
let A = [];
let B = [];
let array = [];
for (let i = 0; i < N; i++) {
    array.push([]);
}
for (let i = 0; i < N; i++) {
    A.push(input[i].split(' ').map(v=>+v));
}
for (let i = N; i <= input.length-1; i++) {
    B.push(input[i].split(' ').map(v=>+v));
}
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        array[i].push(A[i][j] + B[i][j]).toString();
    }
}

let answer = '';

for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
        answer += array[i][j] + " ";
    }
    answer += '\n';
}

console.log(answer);


const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(v=>+v);
let arr = []; // 포켓몬 도감에 들어있는 포켓몬 이름을 담을 배열
let quiz = []; // 문제를 담을 배열
let answer = '';
for (let i = 0; i < N; i++) {
    arr.push(input[i]);
}

for (let i = N; i <= input.length - 1; i++) {
    quiz.push(Number(input[i]) || String(input[i]));
}

for (let i = 0; i <= quiz.length - 1; i++) {
    if (quiz[i] > 0) {
        answer += arr[quiz[i] - 1] + '\n';
    } else {
        answer += arr.indexOf(quiz[i]) + 1 + '\n';
    }
}
console.log(answer.trim());
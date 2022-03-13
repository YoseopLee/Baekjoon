const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(v=>+v);
const NameToNum = new Map();
const NumToName = new Map();
for (let i = 0; i < N; i++) {
    NameToNum.set(input[i], i+1);
    NumToName.set(i+1, input[i]);
}
let answer = '';
const quiz = input.slice(N, input.length);
quiz.forEach(v => {
    if (isNaN(v)) {
        answer += NameToNum.get(v) + '\n';
    } else {
        answer += NumToName.get(+v) + '\n';
    }
})

console.log(answer.trim());
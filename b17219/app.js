const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(v=>+v);
const pwMap = new Map();
for (let i = 0; i < N; i++) {
    let S = input[i].split(' ')[0];
    let P = input[i].split(' ')[1];
    pwMap.set(S, P);
}
const question = input.slice(N, input.length);
let answer = [];
question.forEach(v=> {
    answer.push(pwMap.get(v));
});
console.log(answer.join('\n'));
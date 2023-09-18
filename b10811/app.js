const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const [N, M] = input[0].split(' ');
input.shift();
let answer = [];


for (let i = 1; i <= N; i++) {
    answer.push(i);
}

for (let i = 0; i < M; i++) {
    let array = [];
    for (let j = input[i].split(' ')[0]-1; j < input[i].split(' ')[1]; j++) {
        array.push(answer[j]);
    }
    array.reverse();
    answer.splice(input[i].split(' ')[0]-1, input[i].split(' ')[1] - input[i].split(' ')[0]+1, ...array);
}
console.log(answer.join(' '));
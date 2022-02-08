const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(v => +v);

const N = input[0];
const K = input[1];

const queue = [];
const answer = [];

for (let i = 1; i <= N; i++) {
    queue.push(i);
}

let count = 1;
while (true) {
    if (queue.length === 0) {
        break;
    } else {
        if (count % K === 0) {
            answer.push(queue.shift());
        } else { // count 가 K 가 아니라면
            queue.push(queue.shift()); // 현재 queue 배열의 첫번째 요소를 떼어내서 마지막에 붙힘
        }
    }
    count++;
}

console.log(`<${answer.join(', ')}>`);

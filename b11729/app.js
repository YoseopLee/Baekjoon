const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);
let count = 0;
let answer = [];

function move (num, from, other, to) { // num : 원반 갯수, from : 어디서, to : 어디로, other : 나머지 빈 곳
    if (num === 0) {
        return;
    } else {
        move(num - 1, from, to, other) // 받아온 원반 갯수보다 하나 적은 원반들을 재귀적으로 계속 이동시킴
        answer.push([from, to]); // 맨 아래 원판을 목적지로 이동시킴
        count++;
        move(num - 1, other, from, to) // 다른 곳으로 옮겼던 원판들을 그 위로 옮김
    }
}

move(N, '1', '2', '3')
console.log(count);
console.log(answer.map((x) => x.join(' ')).join('\n'));
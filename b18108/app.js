const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();

const y = Number(input);

solution(y);

function solution(y) {
    console.log(y - 543);
}
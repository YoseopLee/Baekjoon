const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const N = Number(input.shift()); // 보드의 크기
const K = Number(input.shift()); // 사과의 갯수



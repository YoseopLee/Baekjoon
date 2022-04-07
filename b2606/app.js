const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n').map(v=>+v);
const node = input.shift();
const Num = input.shift();
let graph = [...new Array(node + 1)].map(() => []);
let visted = [...new Array(node + 1)].fill(0);
let answer = 0;

for (let i = 0; i < Num; i++) {
    let start = Number(input[i + 2])
}
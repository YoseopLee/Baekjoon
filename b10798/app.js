const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(v=>v.split(''));
let answer = [];
const MaxLeng = Math.max(input.length);
console.log(MaxLeng);
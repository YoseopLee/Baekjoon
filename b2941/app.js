const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const S = String(input[0]);
const RegExp = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
const answer = S.replace(RegExp, ' ');

console.log(answer.length);
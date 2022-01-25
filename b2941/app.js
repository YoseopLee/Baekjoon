const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const S = String(input[0]);
const RegExp = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
const answer = S.replace(RegExp, ' '); // 정규식에 부합하는 문자열들을 공백으로 대체

console.log(answer.length)
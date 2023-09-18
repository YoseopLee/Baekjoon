const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const S = input[0].split('');
const i = input[1];
S.splice(0, i-1);
console.log(S[0]);
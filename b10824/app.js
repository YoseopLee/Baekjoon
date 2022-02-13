const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ');

const AB = String(input[0]) + String(input[1]);
const CD = String(input[2]) + String(input[3]);

console.log(Number(AB) + Number(CD));
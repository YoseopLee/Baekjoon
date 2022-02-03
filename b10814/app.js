const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());

input.sort((a, b) => a.split(' ')[0] - b.split(' ')[0]);

console.log(input.join('\n'));

const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const M = Number(input.shift());
console.log(M);
for (let i = 0; i < M; i++) {
    
}
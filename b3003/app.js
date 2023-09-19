const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ').map(v=>+v);
const array = [1,1,2,2,2,8];
let answer = [];
for (let i = 0; i < array.length; i++) {
    answer.push(array[i] - input[i]);
}
console.log(answer.join(' '));
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').slice(1).map(v => +v);
input.sort((a,b) => a-b);

let result = [];
let inputArray = Array(8001).fill(0);
input.forEach(v => inputArray[v+4000]++);
result.push(Math.round(input.reduce((t, v) => t+v, 0) / input.length));
result.push(input[input.length/2|0]);
let maxCount = Math.max(...inputArray);
let m = [];
inputArray.forEach((v, i) => v === maxCount&&m.push(i-4000))
result.push(m.length > 1 ? m[1] : [0]);
result.push(input[input.length - 1] - input[0]);
console.log(result.join`\n`);

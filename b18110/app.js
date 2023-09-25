const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n').map(v=>+v);
const n = input[0];
input.shift();
let cut = Math.round(n * 0.15);
input.sort((a,b) => a-b);
let slicedArray = input.slice(cut, input.length - cut);
let sum = slicedArray.reduce((a,b) => a+b);
let avg  = sum / slicedArray.length;
console.log(Math.round(avg));

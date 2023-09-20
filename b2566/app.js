const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(v=>v.split(' ').map(v=>+v));
let arr = [];
let x = 0;
let y = 0;
input.forEach((i) => {
    y = i.length;
    arr.push(...i);
})
const max = Math.max(...arr);
const index = arr.indexOf(max);
console.log(max);
console.log(Math.floor(index/y) + 1, index%y +1);
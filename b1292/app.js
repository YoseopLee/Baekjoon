const filePath = process.platform === 'linux' ? 'dev/stdin' :'./input.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ');
const [A, B] = input.map(v=>+v); // 3 7
let arr = [0];
let cnt = 0;
let i = 1;
while (arr.length <= B) { // 7
    arr.push(i);
    cnt++;
    if (cnt === i) {
        i++;
        cnt = 0;
    }
}
console.log(arr.slice(A, B + 1).reduce((a, b) => a + b, 0));
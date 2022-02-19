const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ').map(v=>+v);

const A = input[0];
const B = input[1];
const C = input[2];

let answer = 0; 
if (A === B && B === C) {
    answer = 10000 + A * 1000;
} else if (A === B && B !== C) {
    answer = 1000 + A * 100;
} else if (B === C && C !== A) {
    answer = 1000 + B * 100;
} else if (A === C && A !== B) {
    answer = 1000 + A * 100;
} else if (A !== B && B !== C && A !== C) {
    answer = Math.max(...input) * 100;
}

console.log(answer);
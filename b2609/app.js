const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let c = 1;

if (a > b) [a,b] = [b,a];

for (let i = 0; i <= a; i++) {
    if (a % i === 0 && b % i === 0) {
        c = i;
    }
}
answer = c + '\n';
if (c === a) {
    answer += c * (b/c);
} else {
    answer += (a/c) * (b/c) * c;
}
console.log(answer);
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const T = Number(input.shift());
let answer = '';

for (let i = 0; i < T; i++) {
    let a = Number(input[i].split(' ')[0]);
    let b = Number(input[i].split(' ')[1]);
    let c = gcd(a,b);
    answer += ((a * b) / c) + '\n';
}

function gcd (a,b) {
    let d;
    while (b !== 0) {
        d = a % b;
        a = b;
        b = d;
    }
    return a;
}
console.log(answer)
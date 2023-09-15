const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const X = +input.shift();
const N = +input.shift();
answer = 0;
for (let i = 0; i < N; i++) {
    answer += input[i].split(' ')[0] * input[i].split(' ')[1];
}

if (answer === X) {
    console.log('Yes');
} else {
    console.log('No');
}
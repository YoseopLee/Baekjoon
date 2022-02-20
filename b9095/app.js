const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n').map(v=>+v);
const T = input.shift();

let answer = '';
const arr = [0, 1, 2, 4];

for (let i = 0; i < T; i++) {
    for (let j = 4; j <= input[i]; j++) {
        arr[j] = arr[j - 1] + arr[j - 2] + arr[j - 3];
    }
    answer += arr[input[i]] + '\n';
}
console.log(answer);
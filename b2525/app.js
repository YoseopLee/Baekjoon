const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const H = Number(input[0].split(' ')[0]);
const M = Number(input[0].split(' ')[1]);
const N = Number(input[1]);

let answer = '';
let add = Math.floor((M + N) / 60);

if (add < 1) {
    answer += H + ' ' + (M + N);
} else if (add >= 1) {
    if (H + add >= 24) {
        answer += (H + add - 24) + ' ' + (M + N - (60 * add))
    } else {
        answer += (H + add) + ' ' + (M + N - (60 * add))
    }
}

console.log(answer);
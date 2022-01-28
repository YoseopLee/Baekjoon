const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);

solution();

function solution() {
    let inputArray = [];
    for (let i = 1; i <= N; i++) {
        inputArray.push(input[i]);
    }

    inputArray.sort((a,b) => a-b);
    console.log(inputArray.join('\n'));
}
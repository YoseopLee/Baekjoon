const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, C] = input.shift().split(' ').map(v=>+v);
const inputs = input.map(v=>+v).sort((a,b) => a-b);

let start = 1;
let end = inputs[inputs.length - 1] - inputs[0];
let answer = 0;

while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let home = inputs[0];
    let count = 1;

    for (let i = 1; i < N; i++) {
        if (inputs[i] >= home + mid) {
            home = inputs[i];
            count++;
        }
    }

    if (count >= C) {
        start = mid + 1;
        answer = mid;
    } else {
        end = mid - 1;
    }
}

console.log(answer);
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(v=>+v);
const inputs = input.shift().split(' ').map(v=>+v).sort((a,b) => a-b);

let start = 0;
let end = inputs[inputs.length - 1];
let answer = 0;

while (start <= end) {
    let mid = Math.floor((start + end)/2);
    let sum = 0;
    for (let i of inputs) {
        if (i > mid) {
            sum += i - mid;
        } 
    }

    if (sum >= M) {
        if (mid > answer) {
            answer = mid;
        }
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}
console.log(answer);
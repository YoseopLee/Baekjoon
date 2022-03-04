const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [K, N] = input.shift().split(' ').map(v=>+v);
const inputs = input.map(v=>+v).sort((a,b) => a-b);

let start = 0;
let end = inputs[inputs.length - 1];
let answer = 0;

while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let count = inputs.reduce((a,b) => a + Math.floor(b/mid), 0);
    
    if (count >= N) {
        if (mid > answer) {
            answer = mid;
        }
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(answer);
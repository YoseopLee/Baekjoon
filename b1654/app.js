const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [K, N] = input.shift().split(' ').map(v=>+v);
const inputs = input.map(v=>+v).sort((a,b) =>  a-b);

let start = 0;
let end = inputs[inputs.length - 1]; // inputs의 마지막 요소
let answer = 0;

while (start <= end) {
    let mid = Math.floor((start +  end) / 2);
    let count = inputs.reduce((a, b) =>  a + Math.floor(b/mid), 0); // 랜선 갯수
    if (count >= N) {  // 랜선 갯수가 N보다 크거나 같으면?
        if (mid > answer) { // mid가 answer보다 크면
            answer = mid; // answer = mid
        }
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}
console.log(answer);
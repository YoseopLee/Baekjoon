const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let [T, ...arr] = input;
arr = arr.map((v)=>v.split(' ').map(Number));
let answer = '';

for (let i = 0; i < arr.length; i += 2) {
    let count = 0;
    const prev = arr[i + 1];
    let idx = arr[i][1];

    while (true) {
        const max = Math.max(...prev);
        const num = prev.shift();
        if (num === max) {
            count++;
            if (idx === 0) {
                answer += count + '\n';
                break;
            }
        } else {
            prev.push(num);
        }

        if (idx === 0) {
            idx = prev.length - 1;
        } else {
            idx--;
        }
    }
}

console.log(answer.trim());
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = input.shift();
const result = [];

for (let i = 0; i < T; i++) {
    let count = 0;

    for (let j of input[i]) { // input[i] 속에 있는 요소들
        count += j === "(" ? 1 : -1;

        if (count < 0) break;
    }

    result.push(count === 0 ? 'YES' : 'NO');
}

console.log(result.join('\n'));
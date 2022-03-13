const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = Number(input.shift());
for (let i = 0; i < T; i++) {
    let countOne = 0
    let countZero = 1;
    for (let j = 1; j <= input[i]; j++) {
        let tmp = countZero;
        countZero = countOne;
        countOne = tmp + countOne;
    }
    console.log(countZero + " " + countOne);
}
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
input.pop();
let answer = [];
for (let i = 0; i < input.length; i++) {
    let arr = input[i].split('');
    let length = arr.length + 1;
    for (let j = 0; j <  arr.length; j++) {
        if (arr[j] === '0') {
            length += 4;
        } else if (arr[j] === '1') {
            length += 2;
        } else {
            length += 3;
        }
    }
    answer.push(length);
}
console.log(answer.join('\n'));
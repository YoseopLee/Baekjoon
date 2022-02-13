const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
 
let answer = '';
// 소문자, 대문자, 숫자, 공백
for (let i = 0; i < input.length; i++) {
    if (input[i] === '') {
        continue;
    }
    let count = Array(4).fill(0);
    let splitedInput = input[i].split('')
    for (let j = 0; j < splitedInput.length; j++) {
        if (splitedInput[j].charCodeAt() >= 97 && splitedInput[j].charCodeAt() <= 122) {
            count[0] += 1;
        } else if (splitedInput[j].charCodeAt() >= 65 && splitedInput[j].charCodeAt() <= 90) {
            count[1] += 1;
        } else if (splitedInput[j].charCodeAt() >= 48 && splitedInput[j].charCodeAt() <= 57) {
            count[2] += 1;
        } else if (splitedInput[j] === ' ') {
            count[3] += 1;
        }
    }
    answer += count.join(' ') + '\n';
}

console.log(answer);
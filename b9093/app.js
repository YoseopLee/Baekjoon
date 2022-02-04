const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = input.shift();

for (let i = 0; i < T; i++) {
    let words = input[i].split(' ');
    console.log(words);
    let answer = words.map((word) => word.split('').reverse().join('')).join(' ');
    console.log(answer);
}
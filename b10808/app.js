const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();

let inputArray = Array(26).fill(0);
let alphabet = [];
let answer = [];

for (let i = 0; i < input.length; i++) {
    alphabet.push(input.charCodeAt(i) - 97);
    for (let j = 0; j < inputArray.length; j++) {
        if (alphabet[i] === j) {
            inputArray[j] += 1;
        }
    }
}

console.log(inputArray.join(' '));
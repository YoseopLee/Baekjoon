const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

for (let i = 0; i < input.length; i++) {
    let S = input[i].split('');
    let small = 0;
    let big = 0;
    let space = 0;
    let number = 0;
    if (input[i] === '') {
        continue;
    }
    for (let j = 0; j < S.length; j++) {
        if (S[j] >= 'a' && S[j] <= 'z') {
            small++;
        } else if (S[j] >= 'A' && S[j] <= 'Z') {
            big++;
        } else if (S[j] >= '0' && S[j] <= '9') {
            number++;
        } else if (S[j] === ' ') {
            space++;
        }
    }
    console.log(`${small} ${big} ${number} ${space}`);
}
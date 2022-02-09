const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();

const regex = /(<.+?>|\s)/g;
const words = input.split(regex);
let answer = '';

words.map((w) => {
    if (regex.test(w)) {
        answer += w;
    } else {
        answer += w.split('').reverse().join('');
    }
})

console.log(answer);
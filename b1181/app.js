const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());

const answer = [...new Set(input)].sort((a,b) => {
    if (a.length > b.length) {
        return 1;
    } else if (a.length < b.length) {
        return -1;
    } else {
        if (a > b) {
            return 1;
        } else {
            return -1
        }
    }
})

console.log(answer.join('\n'));
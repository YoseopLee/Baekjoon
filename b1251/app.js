const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('');
let answer = [];
for (let i = 0; i < input.length - 2; i++) {
    for (let j = i + 1; j < input.length - 1; j++) {
        for (let k = j + 1; k < input.length; k++) {
            tmp = input.slice(0,j).reverse().join('') + input.slice(j, k).reverse().join('') + input.slice(k).reverse().join('');
            answer.push(tmp);
        }
    }
}
answer.sort();
console.log(answer[0]);
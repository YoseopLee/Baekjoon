const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('');
let tmp = [];
let a;
let b;
let c;
let answer = [];
for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
        a = input.slice(0,i).reverse().join('');
        b = input.slice(i,j).reverse().join('');
        c = input.slice(j).reverse().join('');
        tmp.push(a + b + c);
    }
}
for (a of tmp) {
    answer.push(a);
}
console.log(answer.sort()[0]);
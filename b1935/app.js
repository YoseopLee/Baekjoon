const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input.shift()); // 피연산자의 갯수
const exp = input.shift().split(''); // 후위 표기식 글자 단위로 split
const nums = input.map(v=>+v); // A,B,C,D,E... 값들에 대응하는 수
let stack = [];
let stack2 = [];
let value = {};

const calc = {
    '+' : (a,b) => a + b,
    '-' : (a,b) => a - b,
    '*' : (a,b) => a * b,
    '/' : (a,b) => a / b,
};

for (let i = 0; i < exp.length; i++) {
    if (exp[i] >= 'A' && exp[i] <= 'Z') {
        stack.push(exp[i])
    }
}

for (let i = 0; i < N; i++) {
    value[stack[i]] = nums[i];
}

const transExp = exp.map(v => !['*', '/', '+', '-'].includes(v) ? value[v] : v);

for (let i = 0; i < transExp.length; i++) {
    if (['*', '/', '+', '-'].includes(transExp[i])) {
        const secVal = stack2.pop();
        const firVal = stack2.pop();
        const calcFunc = calc[transExp[i]];
        transExp[i] = calcFunc(firVal, secVal);
    }
    stack2.push(transExp[i]);
}

const answer = (Math.floor(stack2[0] * 100) / 100).toFixed(2);
console.log(answer);
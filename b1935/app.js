const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift()); // 피연산자의 갯수
const exp = input.shift().split(''); // 후위 표기식 글자 단위로 split
const nums = input.map(v=>+v); // A,B,C,D,E... 값들에 대응하는 수
const stack = [];
let value = {};
let ASC = 65; // 아스키코드 대문자 A 시작점

const calc = {
    '+' : (a,b) => a + b,
    '-' : (a,b) => a - b,
    '*' : (a,b) => a * b,
    '/' : (a,b) => a / b,
};

for (let i = 0; i < N; i++) {
    value[String.fromCharCode(ASC++)] = nums[i];
}

const transExp = exp.map(v => !['*', '/', '+', '-'].includes(v) ? value[v] : v);

for (let i = 0; i < transExp.length; i++) {
    if (['*', '/', '+', '-'].includes(transExp[i])) {
        const secVal = stack.pop();
        const firVal = stack.pop();
        const calcFunc = calc[transExp[i]];
        transExp[i] = calcFunc(firVal, secVal);
    }
    stack.push(transExp[i]);
}

const answer = stack[0].toFixed(2);
console.log(answer);
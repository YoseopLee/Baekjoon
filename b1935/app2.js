const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [n, exp, ...nums] = input;
const numbers = nums.map(v=>+v);

function solution(n, exp, numbers) {
    let ASCII = 65;
    const stack = [];
    const operators = ['*', '/', '+', '-'];
    const transformer = {};

    const calc = {
        '+' : (a,b) => a + b,
        '-' : (a,b) => a - b,
        '*' : (a,b) => a * b,
        '/' : (a,b) => a / b,
    };

    for (let i = 0; i < n; i++) {
        const alphabet = String.fromCharCode(ASCII++);
        transformer[alphabet] = numbers[i];
    }

    console.log(transformer)

    const transformExp = exp.split('').map(v=> !operators.includes(v) ? transformer[v] : v);
    
    for (let i = 0; i < transformExp.length; i++) {
        let pushVal = transformExp[i];
        if (operators.includes(pushVal)) {
            const secondVal = stack.pop();
            const firVal = stack.pop();
            const calcFunc = calc[pushVal];
            pushVal = calcFunc(firVal, secondVal);
        }
        stack.push(pushVal);
    }
    console.log(stack);
    return (Math.floor(stack[0] * 100) / 100).toFixed(2);
}

const answer = solution(n, exp, numbers);
console.log(answer);
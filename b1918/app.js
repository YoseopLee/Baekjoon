const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();

let stack = [];
const word = input.split('');
let answer = '';

for (let i = 0; i < word.length; i++) {
    if (word[i] >= 'A' && word[i] <= 'Z') {
        answer += word[i]; // word[i]가 대문자면 그대로 answer에 추가
    } else if (word[i] === '(') {
        stack.push(word[i]); // word[i]가 (면 스택에 (로 추가
    } else if (word[i] === ')') {
        while (stack.length && stack[stack.length - 1] !== '(') {
            answer += stack.pop(); // word[i]가 )면 stack이 비어있지 않고 스택의 상단이 (일때까지 pop하여 answer에 push 한 뒤 ( pop 한다.
        }
        stack.pop();
    } else if (word[i] === '+' || word[i] === '-') {
        while (stack.length && stack[stack.length - 1] !== '(') {
            answer += stack.pop();
        }
        stack.push(word[i]);
    } else if (word[i] === '*' || word[i] === '/') {
        while (stack.length && stack[stack.length - 1] === '*' || stack[stack.length - 1] === '/') {
            answer += stack.pop();    
        }
        stack.push(word[i]);
    }
}

while (stack.length) {
    answer += stack.pop();
}

console.log(answer);
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();
let sticks = [];
let answer = 0;
const P = input.split('');
for (let i = 0; i < P.length; i++) {    
    if (P[i] === '(' && P[i+1] === ')') { // 레이저로 쪼개지는 경우 '()' 
        answer += sticks.length;  // 레이저를 쏘는 경우에는 스택에 있는 길이를 answer에 추가
        i += 1; // 레이저를 쏘면 막대기의 갯수가 스틱 하나당 하나씩 추가
    } else if (P[i] === '(') { // 막대가 처음 시작되는 곳 '('
        sticks.push(P[i]); // 스틱이 시작하는 부분이니까 스택에 스틱을 하나 더해줌
    } else if (P[i] === ')') { // 막대가 끝나는 곳 ')'
        sticks.pop(); // 스틱이 끝나는 경우, 스틱 배열에서 pop을 해줌
        answer += 1; // 하나의 스틱이 완성 되었으니 answer에 1추가
    }
}
console.log(answer);
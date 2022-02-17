const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();

const solution = (x) => {
    let answer = 0;
    for (let i = 5; i <= x; i *= 5) {
        answer += parseInt(x / i);
    }
    return answer;
}
console.log(solution(input));
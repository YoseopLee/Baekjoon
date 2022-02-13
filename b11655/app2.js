const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();

const S = input.split('');
let answer = '';

for (let i = 0; i < S.length; i++) {
    if (S[i].charCodeAt() >= 65 && S[i].charCodeAt() <= 90) { // 대문자일 경우
        if (S[i].charCodeAt() + 13 > 90) {
            answer += String.fromCharCode(S[i].charCodeAt() - 13)
        } else {
            answer += String.fromCharCode(S[i].charCodeAt() + 13)
        }
    } else if (S[i].charCodeAt() >= 97 && S[i].charCodeAt() <= 122) { // 소문자일 경우
        if (S[i].charCodeAt() + 13 > 122) {
            answer += String.fromCharCode(S[i].charCodeAt() - 13) 
        } else {
            answer += String.fromCharCode(S[i].charCodeAt() + 13)
        }
    } else if (S[i] === ' ') { // 공백일 경우
        answer += ' ';
    } else { // 숫자일 경우
        answer += S[i];
    }
}

console.log(answer);
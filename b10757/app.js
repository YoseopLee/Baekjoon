const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ');

// 임의의 정밀도로 정수를 나타낼 수 있는 js의 새로운 숫자 데이터형
// BigInt를 출력할 때는 toString()으로 출력해야한다. 그렇지 않으면 끝에 n이 붙어서 나옴
const A = BigInt(input[0]);
const B = BigInt(input[1]);

solution(A, B);

function solution(A,B) {
    let answer = A + B;
    console.log(answer.toString());
}

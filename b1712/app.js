const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split(' ');

const A = Number(input[0]); // 고정비용 : 1000
const B = Number(input[1]); // 가변 비용 : 70
const C = Number(input[2]); // 1대 가격 : 170

solution(A,B,C);

function solution(A,B,C){
    const point = C-B; // C - B (판매가격 - 가변비용)
    if (point <= 0) { // C-B 가 음수면
        console.log(-1); // -1 반환
    } else {
        console.log(Math.floor( A / point ) + 1);
    }
}
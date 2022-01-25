const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();

const n = Number(input);

/* 
재귀 함수 : 재귀함수는 메모리를 많이 차지하고 성능이 반복문에 비해서 느리다.
함수를 반복적으로 호출하므로, 스택 메모리가 커지고, 호출하는 횟수가 많아지면 스택오버플로우가 발생할 수 있다.
그러므로 상황에 따라 적절하게 사용하도록 하자.
*/

function solution(n) {
    if (n === 0) return 0; // 제약 조건을 걸어줘야 종료가 됨.
    if (n === 1 || n === 2) return 1;
    return solution(n - 1) + solution(n - 2); // 제약조건을 안걸면 무한루프 함.
}

console.log(solution(n));
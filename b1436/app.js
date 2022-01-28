const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();

const N = Number(input);

solution(N);

function solution(N) {
    let answer = 0; // 최종적인 답이 들어감
    let count = 0; // 지금 몇번째인지 알려주는 변수
    let min = 666; // 최소 종말의 숫자 선언

    while (true) {
        if (String(min).includes("666")) {
            count++;
            if (count === N) { // count가 주어진 입력값과 같아지면
                answer = min; // answer에 현재 종말 숫자 담고
                break; // 반복문 종료
            }
        }
        min++; // 현재 min에 666이 포함되지 않으면 min + 1 반복
    }
    console.log(answer); // break로 탈출한 answer 출력
}
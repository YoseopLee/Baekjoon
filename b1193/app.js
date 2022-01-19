const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString();

solution(input);

function solution(X) {
    let i = 1; // 몇번째 대각선인 동시에 그 대각선에 있는 분수의 갯수

    while (true) {  // true로 지정시 break 전까지 무한루프
        X -= i; // 그 전 X값에서 -i 만큼 뺌. X는 그 줄의 몇번째 분수인지를 가르킴
        if (X <= 0) { // 만약 입력값이 0보다 작거나 같아지면 => 이번 i에 해당 분수가 있구나!
            X += i; // 입력값에 i 만큼 다시 돌려줌
            break; // 그리고 break; i 뽑아냄
        }
        i++; // 루프 끝에서 i 1씩 증가
    }

    if (i % 2 === 1) { // 홀수번째 대각선이면
        console.log(`${i - (X - 1)}/${1 + (X - 1)}`);
    } else { // 짝수번째 대각선이면
        console.log(`${1 + (X - 1)}/${i - (X - 1)}`);
    }
}
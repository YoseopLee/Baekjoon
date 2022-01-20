const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const T = Number(input[0]);

solution(T);

function solution(T) {
    let x; // 출발지점
    let y; // 도착지점
    let a;
    let b; 
    let answerArray = [];

    for (let i = 1; i <= T; i++) {
        input[i] = input[i].split(' ');
        x = Number(input[i][0]);
        y = Number(input[i][1]);

        if (Math.sqrt(y-x) % 1 === 0) { // y-x 가 제곱수면?
            answer = 2 * Math.sqrt(y-x) - 1;
        } else {
            a = Math.pow(Math.ceil(Math.sqrt(y-x)), 2); // y-x 보다 큰 제곱
            b = Math.pow(Math.ceil(Math.sqrt(y-x)) - 1, 2) + 1; // 그보다 한 단계 아래 제곱

            if ((a+b) / 2 <= y-x) {
                answer = 2 * Math.ceil(Math.sqrt(y-x)) - 1;
            } else {
                answer = 2 * Math.ceil(Math.sqrt(y-x)) - 2;
            }
        }
        answerArray.push(answer);
        console.log(answerArray[answerArray.length - 1]);
    }
}
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const T = input[0].split(' ');
const N = Number(T[0]); // 주어진 카드의 갯수
const M = Number(T[1]); // 딜러가 말한 수
const cards = input[1].split(' ').map((x) => Number(x)); // 카드 N개에 적혀있는 각각의 숫자들

solution(N, M, cards);

function solution(N, M, cards) {
    let answer = 0;

    for (let i = 0; i < N; i++) { // 1번째 숫자
        for (let j = i + 1; j < N; j++) { // 2번째 숫자
            for (let k = j + 1; k < N; k++) { // 3번째 숫자
                let sum = cards[i] + cards[j] + cards[k];
                let gap = M - sum; 
                if (gap >= 0 && answer <= sum) { // gap이 음수인지 양수인지 판별 && answer <= sum
                    answer = sum;
                }
            }
        }
    }
    console.log(answer);
}
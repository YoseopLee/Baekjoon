const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);

solution(N);

function solution() {
    let x = [];
    let y = [];
    let P = []; // 각 사람마다 체형 정보를 객체 형태로  배열에 담음. 

    for (let i = 1; i <= N; i++) {
        x.push(input[i].split(' ')[0]); // 몸무게
        y.push(input[i].split(' ')[1]); // 키
    }
    
    for (let j = 0; j < N; j++) {
        P.push({x : x[j], y : y[j], rank : 1});
    }

    for (let i = 0; i < P.length; i++) { // 사람의 수만큼 반복문 돌림
        for (let j = 0; j < P.length; j++) { // 비교 대상의 반복문 돌림
            if (i !== j && P[i].x < P[j].x && P[i].y < P[j].y){ 
                // i !== j : 비교대상이 있고 
                // P[i].x < P[j].x : 비교대상의 몸무게가 더 많이나가고
                // P[i].y < P[j].y : 비교대상의 키가 더 크다면
                P[i].rank++; // P의 i번째 사람의 랭킹을 하나씩 올림.
            } 
        }
    }
    console.log(P.map(i => i.rank).join(' ')); // 띄어쓰기로 구분해서 출력
}
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);

solution(N);

function solution(N) {
    let count = 0;        
    for (let i = 1; i <= N; i++) {
        let alpha = []; 
        let checked = true;
        
        for (let j = 0; j < input[i].length; j++) {
            if (alpha.indexOf(input[i][j]) === - 1) { // 처음 발견된 글자라면? 
                alpha.push(input[i][j]); // alpha 배열에 추가
            } else { 
                if (alpha.indexOf(input[i][j]) !== alpha.length - 1){ // 해당 인덱스가 alpha배열의 마지막 요소가 아니라면?
                    checked = false; // 이전에 탐색되었으나 다시 발견된 글자이므로 그룹 단어에서 제외
                    break;
                }
            }
        }

        if (checked) {
            count += 1;
        }
    }
    console.log(count);
}
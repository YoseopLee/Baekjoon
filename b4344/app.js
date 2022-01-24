const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const C = Number(input[0]); // 테스트 케이스 갯수

for (let i = 1; i <= C; i++) {
    const num = input[i].split(' ');
    const N = Number(num[0]); // 각 줄마다 학생 수 

    let sum = 0;
    for (let j = 1; j <= N; j++) {
        sum += Number(num[j]);
    }

    let avg = sum / N;
    
    let count = 0;
    for (let k = 1; k <= N; k++) {
        if ( Number(num[k]) > avg) {
            count++;
        }
    }

    const percent = (count / N) * 100;
    console.log(percent.toFixed(3) + '%');
}
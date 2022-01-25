const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);

solution(N);

function solution(N) {

    // * 로 채워진 (N * N) 2차원 배열 생성
    let starArray = new Array(N);
    for (let i = 0; i < N; i++) {
        starArray[i] = new Array(N).fill('*');
    };

    // 가운데 구멍 뚫기 함수
    const blank = (N, x, y) => {
        if (N === 1) return;
        let center = N / 3;
        if (center < 3) center = 1;
        let left = center - center;
        let right = center + center;

        for (let i = center; i < right; i++) {
            for (let j = center; j < right; j++) {
                starArray[i + x][j + y] = ' ';
            }
        }
        
        blank(center, left + x, left + y);
        blank(center, left + x, center + y);
        blank(center, left + x, right + y);
        blank(center, center + x, left + y);
        blank(center, center + x, right + y);
        blank(center, right + x, left + y);
        blank(center, right + x, center + y);
        blank(center, right + x, right + y);
    }

    blank(N, 0, 0);
    return starArray.reduce((answer, row) => {
        return answer += row.join('') + '\n';
    }, '');
}

console.log(solution(N));
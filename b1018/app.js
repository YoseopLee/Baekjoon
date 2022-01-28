const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split("\n");
const N = Number(input[0].split(" ")[0]); // 높이
const M = Number(input[0].split(" ")[1]); // 넓이
const squred = [];
let answer = 0; // 최종적인 답
for (let i = 1; i <= N; i++) {
    input[i] = input[i].slice(0, M);
    squred.push(input[i].split(""));
}

const white = (i, j) => {
    let count = 0; // 색칠하는 정사각형 갯수
    for (let w = i; w <= i+7; w++) {
        for (let h = j; h <= j+7; h++) {
            if((w % 2 === 0 && h & 2 === 1) || (w % 2 === 1 && h % 2 === 0)) {
                count = squred[h][w] === "B" ? count : count + 1;
            } else if ((w % 2 === 0 && h % 2 === 0) || (w % 2 === 1 && h % 2 === 1)) {
                count = squred[h][w] === "W" ? count : count + 1;
            }
        }
    }
    return count;
};

const black = (i, j) => {
    let count = 0; // 색칠하는 정사각형 갯수
    for (let w = i; w <= i+7; w++) {
        for (let h = j; h <= j+7; h++) {
            if((w % 2 === 0 && h & 2 === 1) || (w % 2 === 1 && h % 2 === 0)) {
                count = squred[h][w] === "W" ? count : count + 1;
            } else if ((w % 2 === 0 && h % 2 === 0) || (w % 2 === 1 && h % 2 === 1)) {
                count = squred[h][w] === "B" ? count : count + 1;
            }
        }
    }
    return count;
};

for (let i = 0; i + 7 < M; i++) {
    for (let j = 0; j + 7 < N; j++) {
        const whiteFirst = white(i, j);
        const blackFirst = black(i, j);
        if (i === 0 && j === 0) {
            answer = Math.min(whiteFirst, blackFirst);
        } else {
            if (Math.min(whiteFirst, blackFirst) < answer) {
                answer = Math.min(whiteFirst, blackFirst);
            }
        }
    }
}
console.log(answer);
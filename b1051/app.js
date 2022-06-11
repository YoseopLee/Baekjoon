const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const [N, M] = input.shift().split(' ').map(v=>+v);
let squareArr = [];
let answer = 1;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        squareArr.push(input[i][j].split('').map(v=>+v)); 
    }
}
console.log(squareArr);

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        for (let k = 1; i + k < N && j + k < M; k++) {
            if (squareArr[i][j] === squareArr[i+k][j]
                && squareArr[i][j] === squareArr[i][j+k]
                && squareArr[i][j] === squareArr[i+k][j+k]) {
                    if ((k + 1) * (k + 1) > answer) {
                        answer = (k+1) * (k+1);
                    }
            }
        }
    }
}

console.log(answer);
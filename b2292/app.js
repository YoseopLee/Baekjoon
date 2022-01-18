// 백준 2292 - 벌집
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

solution(input);

function solution(N) {
    let block = 1;
    let length = 1;

    while(block < N) {
        block += 6 * length;
        length++;
    }
    
    console.log(length);
}
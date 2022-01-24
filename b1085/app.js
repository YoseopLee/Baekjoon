const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const x = Number(input[0]);
const y = Number(input[1]);
const w = Number(input[2]);
const h = Number(input[3]);

solution(x,y,w,h);

function solution(x,y,w,h) {
    const array = [x,y,w-x,h-y];

    console.log(Math.min(...array));
}
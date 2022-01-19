const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split(' ');

const A = Number(input[0]); // 올라가는 높이
const B = Number(input[1]); // 미끄러지는 높이
const V = Number(input[2]); // 나무 막대 높이

solution(A,B,V);

function solution(A,B,V){
    console.log(Math.ceil((V-B)/(A-B)));
}


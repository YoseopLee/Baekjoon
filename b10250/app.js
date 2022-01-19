const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split('\n');

const T = Number(input[0]);

solution(T);

function solution(T){
    let A =  "";

    for (let i = 1; i <= T; i ++) {
        let H = Number(input[i].split(' ')[0]);
        let N = Number(input[i].split(' ')[2]);

        let NH = N%H; // 층수
        if(NH === 0){
            NH = H;
        }

        let NW = Math.ceil(N/H); // 호수
        NW < 10 ? (NW = String(0) + NW) : NW;

        A += `${NH}${NW}` + '\n';
    }    
    console.log(A);
};
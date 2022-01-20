const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const T = Number(input.shift());

solution(T);

function solution(T) {
    for (let i = 0; i < T; i++) {
        const k = +input.shift();
        const n = +input.shift();

        const H = Array.from(Array(k+1), () => Array(n+1).fill(0));
        for (let i = 1; i <= n; i++) {
            H[0][i] = i;
        }

        for (let i = 1; i <= k; i++) {
            for (let j = 1; j <= n; j++) {
                H[i][j] = H[i-1][j] + H[i][j-1];
            }
        }
         
        console.log(H[k][n]);
    }
}
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const N = Number(input[0]);
const A = input[1].split(' ').map(v=>+v);
const M = Number(input[2]);
const B = input[3].split(' ').map(v=>+v);

let answer = [];
A.sort((a,b) => a-b);
let C = [[A[0],1]];

for (let i = 1; i < A.length; i++) {
    if (A[i - 1] === A[i]) {
        C[C.length - 1][1]++;
    } else {
        C.push([A[i],1]);
    }
}

B.forEach(v=> {
    let start = 0;
    let end = C.length - 1;
    let res = false;

    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        if (v < C[mid][0]) {
            end = mid - 1;
        } else if (v > C[mid][0]) {
            start = mid + 1;
        } else {
            res = true;
            answer.push(C[mid][1]);
            break;
        }
    }
    if (res === false) {
        answer.push(0);
    }
})

console.log(answer.join(' '));
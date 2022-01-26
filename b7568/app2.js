const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

function solution (input) {
    [n, ...person] = input;
    let count = [];

    for (let i = 0; i < n; i++) {
        let rank = 0;
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            [x1, y1] = person[i].split(' ');
            [x2, y2] = person[j].split(' ');

            if(Number(x1) < Number(x2) && Number(y1) < Number(y2)) {
                rank += 1;
            }
        }
        count.push(rank + 1);
    }
    return count.join(' ');
}
console.log(solution(input));
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(v=>+v);

const poketArr = Array.from({length : n + 1});
const dict = {};

for (let i = 1; i <= n; i++) {
    const poketmon = input[i];
    poketArr[i] = poketmon;
    dict[poketmon] = i;
}

const answer = [];
for (let i = n + 1; i <= n + m; i++) {
    const cmd = input[i];
    if (isNaN(+cmd)) {
        answer.push(dict[cmd]);
    } else {
        answer.push(poketArr[+cmd]);
    }
}

console.log(answer.join('\n'));
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(v=>+v);
const noHearSet = new Set();
const noSeeSet = new Set();
for (let i = 0; i < input.length; i++) {
    if (i < N) {
        noHearSet.add(input[i]);
    } else {
        noSeeSet.add(input[i]);
    }
}
let answer = [];
noSeeSet.forEach(v=> {
    if (noHearSet.has(v)) answer.push(v);
})
answer.sort();
console.log(answer.length + '\n' +  answer.join('\n'));
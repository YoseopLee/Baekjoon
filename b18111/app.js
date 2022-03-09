const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [N, M, B] = input.shift().split(' ').map(v=>+v);
const land = input.join(' ').split(' ');
const arr = new Array(257).fill(0);
land.forEach(v=> arr[v]++);

const answer = function (B, arr) {
    let addition, removal;
    let [height, curTime, minTime] = [0,0, Number.MAX_VALUE];
    for (let i = 256; i >= 0; i--) {
        addition = 0;
        removal = 0;
        arr.forEach((v, idx) => {
            if (i < idx) removal += (idx - i) * v;
            else addition += (i - idx) * v; 
        });

        if (B < addition - removal) continue;
        curTime = addition + removal * 2;
        if (minTime !== Number.MAX_VALUE && minTime < curTime) break;
        if (minTime > curTime) {
            minTime = curTime;
            height = i;
        }
    }
    if (minTime === Number.MAX_VALUE) minTime = 0;
    return `${minTime} ${height}`;
}

console.log(answer(B, arr));
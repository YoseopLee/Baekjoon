const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();

const r = Number(input);

solution(r);

function solution(r) {
    const euclid = r * r * Math.PI;
    const taxi = ((r * 2) * r * 0.5) * 2;

    console.log(euclid.toFixed(6));
    console.log(taxi.toFixed(6));
}
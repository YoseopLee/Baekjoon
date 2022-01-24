const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const a = input[0].split(' ');
const b = input[1].split(' ');
const c = input[2].split(' ');

solution(a,b,c);

function solution(a,b,c) {
    const xArray = [];
    const yArray = [];
    let x;
    let y;
    xArray.push(Number(a[0]),Number(b[0]),Number(c[0]));
    yArray.push(Number(a[1]),Number(b[1]),Number(c[1]));
    
    xArray.sort();
    yArray.sort();
    
    x = xArray[1] === xArray[0] ? xArray[2] : xArray[0];
    y = yArray[1] === yArray[0] ? yArray[2] : yArray[0];

    console.log(`${x} ${y}`);
}
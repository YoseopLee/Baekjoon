const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n').map(v=>+v);
const solution = (input) => {
    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        map.set(input[i], 1);
    }

    for (let i = 1; i <= 30; i++) {
        if(!map.has(i)) {
            console.log(i);
        }
    }
}
solution(input);
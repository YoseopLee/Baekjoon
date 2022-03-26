const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const player = [];
const mc = [];
let count = 0;
for (let i = 0; i < 5; i++) {
    player.push(input[i].split(' ').map(v=>+v));
}
for (let i = 5; i < 10; i++) {
    mc.push(input[i].split(' ').map(v=>+v));
}

const isBingo = (arr) => {
    for (let i = 0; i < 5; i++) {
        
    }
}
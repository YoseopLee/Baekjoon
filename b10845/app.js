const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = parseInt(input.shift());

const queue = [];
let answer = '';

for (let i = 0; i < N; i++) {
    const exp = input[i].split(' ')[0];

    switch (exp) {
        case 'pop' :
            answer += `${queue[0] ? queue[0] : -1}\n`
            queue.shift();
            break;
        case 'size' :
            answer += `${queue.length}\n`
            break;
        case 'empty' :
            answer += `${queue.length === 0 ? 1 : 0}\n`
            break;
        case 'front' :
            answer += `${queue[0] ? queue[0] : -1}\n`
            break;
        case 'back' :
            answer += `${queue[queue.length - 1] ? queue[queue.length - 1] : -1}\n`
            break;
        default :
            queue.push(input[i].split(' ')[1]);
            break;
    }
}

console.log(answer);
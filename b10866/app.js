const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n')
const N = parseInt(input.shift());

const deque = [];
let answer = '';

for (let i = 0; i < N; i++) {
    const exp = input[i].split(' ')[0];
    const item = input[i].split(' ')[1];
    switch (exp) { // default : push_back 
        case 'push_front' :
            deque.unshift(item)
            break;
        case 'pop_front' :
            answer += `${deque[0] ? deque[0] : -1}\n`
            deque.shift();
            break;
        case 'pop_back' :
            answer += `${deque[deque.length - 1] ? deque[deque.length - 1] : -1}\n`
            deque.pop()
            break;
        case 'size' :
            answer += `${deque.length}\n`
            break;
        case 'empty' :
            answer += `${deque.length === 0 ? 1 : 0}\n`
            break;
        case 'front' :
            answer += `${deque[0] ? deque[0] : -1}\n`
            break;
        case 'back' :
            answer += `${deque[deque.length - 1] ? deque[deque.length - 1] : -1}\n`
            break;
        default :
            deque.push(item)
            break;
    }
}

console.log(answer);
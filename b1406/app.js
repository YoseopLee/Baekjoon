const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const S = input[0].split('');
let cursor = [];

const N = Number(input.shift().length); // abcd의 길이
const M = Number(input.shift());

for (let i = 0; i < M; i++) {
    let exp = input[i].split(' ')[0]
    
    switch (exp) {
        case 'L' :
            if (S.length !== 0) {
                cursor.push(S.pop());
            }
            break;
        case 'D' :
            if (cursor.length !== 0) {
                S.push(cursor.pop());
            }
            break;
        case 'B' :
            if (S.length !== 0) {
                S.pop();
            }
            break;
        case 'P' :
            S.push(...input[i].split(' ')[1]);
            break;
    } 
}

let result = S.concat(cursor.reverse()).join('');
console.log(result);
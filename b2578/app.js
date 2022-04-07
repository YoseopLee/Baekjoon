const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const call = [];
const dict = {};
let count = 0;
const Garo = (arr) => {
    for (let i = 0; i < 5; i++) {
        let zeroCount = 0;
        for (let j = 0; j < 5; j++) {
            if (arr[i][j] === 0) zeroCount++;
        }
        if (zeroCount === 5) count++;
    }
}

const Sero = (arr) => {
    for (let i = 0; i < 5; i++) {
        let zeroCount = 0;
        for (let j = 0; j < 5; j++) {
            if (arr[j][i] === 0) zeroCount++;
        }
        if (zeroCount === 5) count++;
    }
}

const upDown = (arr) => {
    let zeroCount = 0;
    for (let i = 0; i < 5; i++) {
        if (arr[i][i] === 0) zeroCount++;
    }
    if (zeroCount === 5) count++;
}

const downUp = (arr) => {
    let zeroCount = 0;
    for (let i = 0; i < 5; i++) {
        if (arr[i][4 - i] === 0) zeroCount++;
    }
    if (zeroCount === 5) count++;
}

for (let a = 1; a <= 25; a++) {

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            
        }
    }
    Garo();
    Sero();
    upDown();
    downUp();

    if (count >= 3) {
        console.log(a);
        break;
    }
    count = 0;
}
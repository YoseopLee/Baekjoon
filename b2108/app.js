const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);
input.shift();

let result = [];
const inputArray = Array(8001).fill(0);
    
for (let i = 0; i < N; i++) {
    let idx = Number(input[i]) + 4000;
    inputArray[idx]++;
}

for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] !== 0) {
        for (let j = 0; j < inputArray[i]; j++) {
            result.push(i - 4000);
        }
    } else {
        continue;
    }
}

// 산술 평균 구하는 함수
function getAvg(array) {
    let sum = 0;
    for (let i = 0; i < N; i++) {
        sum += array[i];
    }
    return Math.round(sum / N);
}

// 중앙값 구하는 함수
function getMid(array) {
    const mid = Math.floor(array.length / 2);
    return array[mid];
}

// 최빈값 구하는 함수
function getMostValue(array) {
    const map = new Map();
    for (let i = 0; i < N; i++) {
        if (!map.has(array[i])) {
            map.set(array[i], 1);
        } else {
            map.set(array[i], map.get(array[i]) + 1);
        }
    }
    let max = 0;
    let answer = [];
    map.forEach((el, key) => {
        if (max < el) {
            max = el;
            answer = [];
            answer.push(key);
        } else if (max === map.get(key)) {
            answer.push(key);
        }
    });
    return answer.length !== 1 ? answer[1] : answer[0];
}

// 범위 구하는 함수
function getRange(array) {
    return array[array.length-1] - array[0];
}

console.log(getAvg(result));
console.log(getMid(result));
console.log(getMostValue(result));
console.log(getRange(result));
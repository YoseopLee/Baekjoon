const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);

let inputArray = [];
for (let i = 1; i <= N; i++) {
    inputArray.push(input[i]);
}

solution();

function solution() {
    inputArray = heapSort(inputArray);
    console.log(inputArray);
}

function heapSort (inputArray) {
    for (let i = inputArray.length -1; i >= 0; i--) {
        inputArray = heapify(inputArray, i);

        if (inputArray[0] > inputArray[i]) {
            let temp = inputArray[i];
            inputArray[i] = inputArray[0];
            inputArray[0] = temp;
        }
    }
    return inputArray;
}

function heapify (inputArray, lastIdx) {
    let idx = parseInt(lastIdx / 2) - 1;

    while (idx >= 0) {
        const left = inputArray[idx * 2 + 1];
        const right = inputArray[idx * 2 + 2];
        
        if (left >= right && inputArray[idx] < left) {
            temp = inputArray[idx];
            inputArray[idx * 2 + 1] = temp;
            inputArray[idx] = left;
        } else if (right  > left && inputArray[idx] < right) {
            temp = inputArray[idx];
            inputArray[idx * 2 + 2] = temp;
            inputArray[idx] = right;
        }
        idx--;
    }
    return inputArray;
}

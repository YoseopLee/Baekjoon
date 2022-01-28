const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);

let inputArray = [];
for (let i = 1; i <= N; i++) {
    inputArray.push(input[i]);
}

solution(inputArray);

function solution(array) {
    if (array.length < 2) {
        return array;
    }

    const mid = Math.floor(array.length / 2);

    const left = array.slice(0, mid);
    const right = array.slice(mid);

    return merge(solution(left), solution(right));
    
    function merge (left, right) {
        const resultArray = [];
        let leftIdx = 0;
        let rightIdx = 0;

        while (leftIdx < left.length && rightIdx < right.length) {
            if (left[leftIdx] < right[rightIdx]) {
                resultArray.push(left[leftIdx])
                leftIdx++;
            } else {
                resultArray.push(right[rightIdx]);
                rightIdx++;
            }
        }
        return resultArray.concat(left.slice(leftIdx), right.slice(rightIdx));
    }
}

console.log(solution(inputArray));
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n, ...nums] = input;
const numbers = nums.map(i => Number(i));

function solution(n, numbers) {
    const stack = [];
    let answer = '';
    let count = 1;

    for (let i = 0; i < n; i++) {
        const number = numbers.shift();
        
        while (count <= number) { // count를 꺼낸 숫자까지 while문으로 1씩 늘리며 스택에 넣음
            stack.push(count++);
            answer += '+ ';
        }

        const popItem = stack.pop();
        if(popItem !== number) {
            return 'NO';
        }
        answer += '- ';
    }
    return answer.split(' ').join('\n');
}

console.log(solution(n, numbers));
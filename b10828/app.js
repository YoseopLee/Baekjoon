const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [n, ...commands] = input;

function solution(n, commands) {
    const stack = [] // stack 생성
    let top = 0;
    let answer = '';

    for (let i = 0; i < n; i++) {
        const command = commands[i].split(' ')[0];
        let result = '';

        switch(command) {
            case 'push' :
                const pushItem = commands[i].split(' ')[1];
                stack[top++] = pushItem;
                break;
            case 'pop' :
                if (top) {
                    top -= 1;
                    result = stack.splice(-1);
                    answer += result + ' ';
                } else {
                    result = -1;
                    answer += result + ' ';
                }
                break;
            case 'top' :
                result = top ? stack[top - 1] : -1;
                answer += result + ' ';
                break;
            case 'empty' : 
                result = top ? 0 : 1;
                answer += result + ' ';
                break;
            case 'size' :
                result = top;
                answer += result + ' '; 
                break;
            default :
                break;
        }    
    }

    console.log(answer.split(' ').join('\n'));
}

solution(n, commands);
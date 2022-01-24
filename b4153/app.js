const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

for(let i = 0; i < input.length; i++) {
    let num = input[i].split(' ');
    num.sort((a,b) => a - b); // 변이 대소관계 구분 없이 랜덤으로 주어지기 때문에 오름차순으로 정렬해서 대소관계 파악.

    let a = num.shift(); // num 배열 안에 가장 첫번째 요소 뽑아냄 
    let b = num.shift(); // 위에서 shift하고 남은 num배열 요소 중 첫번째 요소 뽑아냄
    let c = num.shift(); // 위에서 shift하고 남은 num배열 요소 중 첫번째 요소 뽑아냄

    if (parseInt(a) === 0 && parseInt(b) === 0 && parseInt(c) === 0) { // a,b,c 가 0 이면 반복문 멈춤
        break;
    }
    if ( parseInt(c) * parseInt(c) === parseInt(b) * parseInt(b) + parseInt(a) * parseInt(a) ) { // 피타고라스 사용
        console.log('right');
    } else {
        console.log('wrong');
    }
}

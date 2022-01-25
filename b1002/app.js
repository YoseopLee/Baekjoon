const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
    const [x1, y1, r1, x2, y2, r2] = input[i].split(' ').map(x => parseInt(x)); // 띄어쓰기로 구분 + 정수화
    const p1 = {x : x1, y : y1}; // 변수 p1에 객체형태로 x,y 값 각각 담음
    const p2 = {x : x2, y : y2}; // 변수 p1에 객체형태로 x,y 값 각각 담음
    const circleDistance = getDistance(p1, p2)
    console.log(pointCount(circleDistance, r1, r2));
}

function getDistance(p1, p2) { // 거리를 구할 식 =>  d
    return ((p1.x - p2.x) ** 2) + ((p1.y - p2.y) ** 2); // 제곱해서 음수를 다 양수로 바꿔서 비교
}

function pointCount(d, r1, r2) {
    const sumR = (r1 + r2) ** 2; // 반지름 합
    const minusR = (r1 - r2) ** 2; // 반지름 차

    if (d === 0) {
        // 거리가 같은경우 => 무수히 접함
        if (r1 === r2) return -1
        return 0
    } else {
        if (d > sumR || d < minusR) {
            return 0;
        } else if (d === minusR || d === sumR) {
            return 1;
        } else if (d < sumR) {
            return 2
        }
    }
}
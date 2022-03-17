const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ');
const [x, y] = input.map(v=>+v);
let days = 0;
for (let i = 1; i < x; i++) {
    if (i === 1 || i === 3 || i === 5 || i === 7 || i === 8 || i === 10 || i === 12) {
        days += 31;
    } else if (i === 2) {
        days += 28;
    } else {
        days += 30;
    }
}
switch (days % 7) {
    case 1 :
        console.log('MON');
        break;
    case 2 :
        console.log('TUE');
        break;
    case 3 :
        console.log('WED');
        break;
    case 4 :
        console.log('THU');
        break;
    case 5 :
        console.log('FRI');
        break;
    case 6 :
        console.log('SAT');
        break;
    case 0 :
        console.log('SUN');
        break;
}

const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
let todayArr = input[0].split(' ').map(v=>+v);
let ddayArr = input[1].split(' ').map(v=>+v);
const getDayOfYear = (year, month, day) => {
    const Days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let d = 0;
    for (let y = 0; y < year; y++) {
        d += 365 + isLeap(y);
    }
    for (let i = 1; i < month; i++) {
        if (i === 2) d += isLeap(year);
        d += Days[i];
    }
    return d + day;
}

// 윤년 조건식. return 
const isLeap = (year) => {
    if (year % 4 !== 0) {
        return 0;
    }
    if (year % 100 !== 0) {
        return 1;
    }
    if (year % 400 !== 0) {
        return 1;
    }
    return 0;
}

// 아예 1년 1월 1일부터 오늘까지 (today),
// 디데이까지 (dday), 천년 후까지 (thousandDay) 
// 총 일 수를 구하고 thoussandDay - today 가 dday - today 보다 작거나 같을 경우 gg친다
const gg = () => {
    let today = getDayOfYear(todayArr[0], todayArr[1], todayArr[2]);
    let dday = getDayOfYear(ddayArr[0], ddayArr[1], ddayArr[2]);
    let thousandDay = getDayOfYear(todayArr[0] + 1000, todayArr[1], todayArr[2]);

    if (dday - today >= thousandDay - today) {
        console.log("gg");
    } else {
        console.log(`D-${dday-today}`);
    }
}

gg();
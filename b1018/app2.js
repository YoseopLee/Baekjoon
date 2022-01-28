const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().split("\n");
const height = Number(input[0].split(" ")[0]);
const width = Number(input[0].split(" ")[1]);
const chessboard = [];
let answer = 0;
for (let i = 1; i <= height; i++) {
  input[i] = input[i].slice(0, width);
  chessboard.push(input[i].split(""));
}

const whiteFirstPaint = (i, j) => {
  let count = 0;
  for (let w = i; w <= i + 7; w++) {
    for (let h = j; h <= j + 7; h++) {
      if ((w % 2 === 0 && h % 2 === 1) || (w % 2 === 1 && h % 2 === 0)) {
        // B인지 검사
        count = chessboard[h][w] === "B" ? count : count + 1;
      } else if ((w % 2 === 0 && h % 2 === 0) || (w % 2 === 1 && h % 2 === 1)) {
        // W인지 검사
        count = chessboard[h][w] === "W" ? count : count + 1;
      }
    }
  }
  return count;
};

const blackFirstPaint = (i, j) => {
  let count = 0;
  for (let w = i; w <= i + 7; w++) {
    for (let h = j; h <= j + 7; h++) {
      if ((w % 2 === 0 && h % 2 === 1) || (w % 2 === 1 && h % 2 === 0)) {
        // W인지 검사
        count = chessboard[h][w] === "W" ? count : count + 1;
      } else if ((w % 2 === 0 && h % 2 === 0) || (w % 2 === 1 && h % 2 === 1)) {
        // B인지 검사
        count = chessboard[h][w] === "B" ? count : count + 1;
      }
    }
  }
  return count;
};

for (let i = 0; i + 7 < width; i++) {
  for (let j = 0; j + 7 < height; j++) {
    const whiteFirst = whiteFirstPaint(i, j);
    const blackFirst = blackFirstPaint(i, j);
    if (i === 0 && j === 0) {
      answer = Math.min(whiteFirst, blackFirst);
    } else {
      if (Math.min(whiteFirst, blackFirst) < answer) {
        answer = Math.min(whiteFirst, blackFirst);
      }
    }
  }
}
console.log(answer);
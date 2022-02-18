function d(n) {
    let number = n;
    let answer = 0;

    for (let i = 0; i < String(n).length; i++) {
        answer += number % 10;
        number = Math.floor(number / 10);
    }

    return n + answer;
}

const max = 10000;
const selfNums = Array(max + 1).fill(true);

for (let i = 0; i <= max; i++) {
    selfNums[d(i)] = false;
}

for (let i = 0; i < max; i++) {
    if (selfNums[i]) {
        console.log(i);
    }
}
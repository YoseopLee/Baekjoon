let result = "";

for (let i = 1; i <= 9; i++) {
  if (i === 4 || i === 8) continue;
  for (let j = 2; j <= 5; j++) {
    result += j + " * " + i + " = " + j * i + " ";
    if (j === 5) result += "\n";
  }
}

result += "\n";

for (let i = 1; i <= 9; i++) {
  if (i === 4 || i === 8) continue;
  for (let j = 6; j <= 9; j++) {
    result += j + " * " + i + " = " + j * i + " ";
    if (j === 9) result += "\n";
  }
}

console.log(result);

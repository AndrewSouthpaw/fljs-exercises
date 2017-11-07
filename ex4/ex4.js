function lotteryNum() {
  return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(numbers) {
  return numbers.concat(lotteryNum()).sort((a, b) => a > b)
}

var luckyLotteryNumbers = [];

for (var i = 0; i < 6; i++) {
  luckyLotteryNumbers = pickNumber(luckyLotteryNumbers);
}

console.log(luckyLotteryNumbers);


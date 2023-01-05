const numbers = [];
for (let i = 1; i <= 9; i++) {
  numbers.push(i);
}

const answer = [];

for (let i = 0; i <= 3; i++) {
  //   numbers.length -> 9
  //   Math.random() 은 0~1(1은 미포함)의 난수를 생성한다.
  // numbers.length를 사용한 이유는 배열에 undefined값이 출력되지 않게 하기 위해서
  const index = Math.floor(Math.random() * numbers.length); // 0~8의 임의의 숫자
  answer.push(numbers[index]); // numbers[0] ~ numbers[8]
  numbers.splice(index, 1); // splice
}

console.log(Math.random() * 9);

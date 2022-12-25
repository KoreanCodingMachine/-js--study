// while 반복문

let i = 0;
while (i < 10) {
  //   console.log(i);
  i++;
}

for (let i = 0; i < 10; i++) {
  //   console.log(i);
}

// 1부터 100까지 while
let c = 1;
while (c <= 100) {
  //   console.log(c);
  c++;
}

// 1부터 100까지 for

for (let i = 1; i <= 100; i++) {
  //   console.log(i);
}

// let d = 0;
// while (d <= 10) {
//   if (d % 2 === 0) {
//     continue;
//   }
//   console.log(d);
//   d++;
// }

// let d = 0;
// while (d < 10) {
//   d++;
//   if (d % 2 === 0) {
//     continue;
//   }
//   console.log(d);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   } else {
//     continue;
//   }
// }

// let e = 0;
// while (e <= 10) {
//   if (e % 2 === 0) {
//     console.log(e);
//     e++;
//   } else {
//     e++;
//     continue;
//   }
// }

// 3중 for문

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 3; k++) {
      //   console.log(i, j, k);
    }
  }
}

// 짝수가 없는 구구단

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    if ((i * j) % 2 === 0) {
      continue;
    } else {
      console.log(`${i}*${j} = ${i * j}`);
    }
  }
}

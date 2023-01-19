const arr = [1, 2, 3, 4, 5];

const data = arr.reduce((a, c) => {
  return a + c;
}, 0);

console.log(data);

// reduce 함수에서 a는 누적값 , c는 현재값이다.

/*

    a는 처음에 0으로 초기화되고 c는 1이다. 그 다음 함수의 반한값인 a+c의 값은 다음번 누적값이 됨 
    
    즉 

    a 0 1 3 6 10

    c 1 2 3 4 5

    return a + c -> 15
*/

// 초기 값이 없는 case

const sum = [1, 2, 3, 4, 5].reduce((a, c) => {
  return a + c;
});

console.log(sum); // 15

// a 1 3 6 10

// c 2 3 4 5

const value = [1, 2, 3, 4, 5].reduce((a, c) => {
  a[c] = c * 10;
  return a;
}, {});

console.log(value);

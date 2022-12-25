// 객체는 자료형의 일종이다. , 다양한 값을 모아 둔 또다른 값 , 배열 , 함수 , 배열.함수가 아닌 객체

// 배열은 length를 알 수 있음

let arr = [1, 2, 3, 4, 5];

console.log(arr.length); // 5

// 배열의 길이를 알면 항상 배열의 마지막 요소를 알 수 있음

console.log(arr[arr.length - 1]); // 5

// 배열에 요소 추가하기

const target = ['a', 'b', 'c', 'd', 'e'];

// 배열의 맨 앞 요소에 추가하기
target.unshift(1);
console.log(target); // [ 1, 'a', 'b', 'c', 'd', 'e' ]

// 배열의 맨 마지막 요소에 추가하기
target.push(1);
console.log(target); // [ 1, 'a', 'b', 'c', 'd', 'e' ,1]

// const는 새로운 값을 대입하지는 못하지만 객체가 대입되면 객체 내부의 속성이나 배열의 요소는 수정 가능하다.

// 배열의 마지막 요소 제거하기
target.pop();
console.log(target); // [ 1, 'a', 'b', 'c', 'd', 'e' ]

// 배열의 첫 번째 요소 제거하기
target.shift();
console.log(target); // [ 'a', 'b', 'c', 'd', 'e' ]

// 배열의 중간 요소 제거
target.splice(1, 1);
console.log(target); // [ 'a', 'c', 'd', 'e' ]

target.splice(1);
console.log(target); // [ 'a' ]

target.splice(1, 3, '타', '파');
console.log(target);

const arrs = [1, 2, 3, 4, 5];
arrs.splice(1, 3, 2);
console.log(arrs);

// 배열에서 요소 찾기
const data = [1, 2, 3, 4, 3];
const result1 = data.includes(4);
const result2 = data.includes(5);
const result3 = data.includes(6);
console.log(result1, result2, result3); // true , true , false

// 배열에서 요소의 인덱스 찾기
const result4 = data.indexOf(3); // index 0 부터 순회
console.log(result4); // 2

const result5 = data.lastIndexOf(3); // 마지막 인덱스부터 순회
console.log(result5); // 4

const as = ['가', '라', '다', '라', '마', '라'];

for (let i = 0; i < as.length; i++) {
  if (as[i].includes('라')) {
    as.splice(i, 1);
  }
}

console.log(as);

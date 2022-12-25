/*
변수 -> 특정한 값을 저장할 때 
*/

let total = 5000 + 8000 + 10000 + 9000;
console.log(total); // 32000

let sunun; // 변수의 선언문
sunun = 10; // 초기화 , 식

// let , const , var

// let 은 변수

let hi; // let이라는 키워드를 이용해 변수를 선언 함
console.log(hi); // undefined , 변수를 선언만하고 최기화 하지 않음
hi = 20; // 식 , 변수의 초기화
console.log(hi); // 20

// const -> 상수 , 변하지 않는 수

// 1.한번 선언되면 수정될 수 없음 , 객체를 사용하면 값을 바꿀 수 있음
const jh = 'jh';
// jh = 'sh'; // TypeError: Assignment to constant variable.

// 2.상수 선언 시 초기화 되지 않으면 에러가 발생한다.(값을 대입하지 않으면)

// const babo // SyntaxError: Missing initializer in const declaration

// var

var variable = '다시 선언할 수 있습니다.'; // 변수문과 초기화

console.log(variable); // '다시 선언할 수 있습니다.'

// var로 변수를 선언하면 특별히 변수문이라고 한다.

// 선언할때 초기화하지 않으면 값에 undefined가 대입된다.
var variable2;
console.log(variable2); // undefined (let과 마찬가지로)

// let과 차이점은 기존에 선언했던 변수를 다시 선언할 수 있음

var variable = '다시 선언했누';
console.log(variable); // '다시 선언했누'

//예약어를 변수명으로 사용할 수 있음

// var undefined = 'defined';
// console.log(undefined); // defined

//퀴즈
let a = 10;
let b = 20;
let c = undefined;

c = a;
a = b;
b = c;

console.log('a:', a, 'b:', b, 'c:', c);

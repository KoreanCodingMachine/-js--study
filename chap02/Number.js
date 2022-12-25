// 숫자형

console.log(typeof 5); // number

console.log(typeof '5'); // string

// 2진법
// 숫자 앞에 0b를 붙임

console.log(0b11); // 3

// 8진법
// 숫자 앞에 0o를 붙임

console.log(0o11); // 9

// 16진법
// 숫자 앞에 0x를 붙임

console.log(0x11); // 17

// 문자열을 숫자로 바꾸기

// parseInt

console.log(parseInt('5')); // 5
console.log(typeof parseInt('5')); // number

// pasreInt는 진법을 활용할 때에도 사용될 수 있음

console.log(parseInt(111, 2)); // 111을 2진법으로

//NaN -> Not a Number

console.log(typeof NaN); // number

//  Infinity , -Infinity , NaN

console.log(2 / 0); // Infinity
console.log(-2 / 0); // -Infinity
console.log(Infinity - Infinity); // NaN , 무한 - 무한은 성립하지 않음
console.log(0 / 0); // NaN

// 형 변환

console.log('1' + 0);
// '10' , 덧셈 연산에서는  우선순위가 문자열 > 숫자열이기 때문에 숫자 0이 문자열 0으로 바뀌고 문자열이 합쳐져 10이 된다.

console.log('문자열' - 0);
// NaN , 빼기 연산에서는 다른 자료형이 먼저 숫자로 변경되고 형변환 된 후 빼기로 연산이 진행됨
// '문자열'을 숫자로 형변환하면 NaN이 되고 NaN - 0 은 NaN

console.log('9' - 5); // 4

console.log(3 ** (2 + 1));

// 실수 계산 시 주의할 점
// 부동소수점 문제에 의해서 실수끼리의 계산에서 오차가 발생한다.

console.log(0.5 + 0.5); // 1

console.log(0.1 + 0.2); // 0.30000000000000004

console.log(0.3 - 0.1); // 0.19999999999999998

// 해결책은 실수를 정수로 바꿔서 계산하고 마지막에 다시 실수로 바꿔서 계산함

console.log((0.3 * 10 - 0.1 * 10) / 10); // 0.2

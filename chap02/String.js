/*
자료형 
*/

// 1.문자열
// 문자들이 하나이상 나열
// 'hello world'

console.log('hello world'); // 결과값이 나오는 명령을 식이라고 함 , 식에 따른 결과값 출력

console.log(typeof 'hello world'); // string

console.log(typeof ''); // string

console.log('' == ' '); // false

console.log('asdf(")'); // asdf(") , vscode에서 자동으로 이스케이핑 문자 생략함 , 따옴표 이스케이핑

console.log('\\'); // \ , \를 이스케이핑한다.

// 줄바꿈

console.log('hi\nhi');

// 템플릿 리터럴

console.log(``); // ''

// 줄 바꿈 시 \n 문자를 사용하지 않아도 줄바꿈이 됨

console.log(`hi 
    hi
`);

// 문자열 합치기
// + 연산자로 문자열을 합칠 수 있음

console.log('hi' + 'jh'); // hijh

//sol1
console.log(
  '문자열이 긴 경우에는' + ' 문자열을' + ' 나눈 뒤' + ' 다시 합칩니다.'
);

//sol2
console.log(`문자열이 긴 경우에는 문자열을 나눈 뒤 다시 합칩니다.`);

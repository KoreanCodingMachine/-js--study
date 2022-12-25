// 조건문

if (true) {
  console.log('hi');
}

if (0) {
  console.log('hi');
}

if (NaN) {
  console.log('HI');
}

const score = 70;

if (score >= 90) {
  console.log('a+');
} else if (score < 90 && score >= 80) {
  console.log('a');
} else if (score < 80 && score >= 70) {
  console.log('b+');
} else {
  console.log('b');
}

if (score >= 90) {
  console.log('a+');
} else if (score >= 80) {
  console.log('a');
} else if (score >= 70) {
  console.log('b+');
} else {
  console.log('b');
}

let first = true;
let second = false;

if (first) {
  console.log('첫번째 조건 충족');
  if (second) {
    console.log('두번쨰 조건 충족');
  } else {
    console.log('두번째 조건 불충족');
  }
} else {
  console.log('첫번쨰 조건 불충족');
}

if (first && second) {
  console.log('첫번째 조건 충족');
  console.log('두번째 조건 충족');
} else if (first) {
  console.log('첫번째 조건 충족');
  console.log('두번째 조건 불충족');
} else {
  console.log('첫번째 조건 불충족');
}

let value = 'ㅇ';

switch (value) {
  case 'A':
    console.log('A');
    console.log('B');
    break;
  case 'C':
    console.log('C');
    break;
  default:
    console.log('아무것도 출력되지 않음');
}

let fruit = '사과';
if (fruit === '사과') {
  console.log('사과입니다!');
} else if (fruit === '배') {
  console.log('배 입니다.');
} else if (fruit === '포도') {
  console.log('포도입니다.');
} else {
  console.log('뭔지 모르겠습니다.');
}

// default 의 위치와 상관없음을 인지하기 위해 일부로 중간에 삽입함
switch (fruit) {
  case '사과':
    console.log('사과입니다!');
    break;
  default:
    console.log('뭔지 모르겠습니다.');
  case '배':
    console.log('배 입니다.');
    break;
  case '포도':
    console.log('포도 입니다.');
    break;
}

// 조건부 3항 연산자

console.log(5 > 0 ? '참 입니다.' : '거짓 입니다');

let condition1 = true;
let condition2 = false;
let values = condition1
  ? condition2
    ? '둘다 참'
    : 'condition1만 참'
  : 'condition1이 거짓';
console.log(values);

if (condition1) {
  if (!condition2) {
    console.log('condition1만 참');
  } else {
    console.log('둘다 참');
  }
} else {
  console.log('condition1이 거짓');
}

let a = false;
let b = true;

let c = a ? 'a가 참이다.' : b ? 'b가 참이다.' : '둘 다 거짓';
console.log(c);

if (a) {
  console.log('a가 참이다.');
} else {
  if (b) {
    console.log('b가 참이다.');
  } else {
    console.log('둘 다 거짓이다.');
  }
}

let cond = true;
let condom = '';
if (cond) {
  condom = '참';
} else {
  condom = '거짓';
}

cond ? (condom = '참') : (condom = '거짓');

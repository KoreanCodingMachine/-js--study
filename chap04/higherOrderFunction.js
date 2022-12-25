/*
고차함수

함수를 호출하면 어떤 값을 반환한다. 이 반환된 값은 자료형이 제한되어있지 않다. 즉 모든 자료형이 될 수 있다.
그렇기 때문에 함수가 함수를 반환할 수도 있다.

*/

const func = () => {
  return () => {
    console.log('hello');
  };
};

const innerFunc = func();
console.log(innerFunc); // [Function (anonymous)]

// 변수에 저장된 함수를 호출할 수 있음
console.log(innerFunc()); // hello , undefined

const innFunc = () => {
  console.log('hello');
};

innFunc();

const innerFunc1 = func();
const innerFunc2 = func();
const innerFunc3 = func();

innerFunc1();
innerFunc2();
innerFunc3();

// 즉 위에서 func 함수와 같이 고차함수란 ? 함수를 만드는 함수라고 볼 수 있다.
// 화살표 함수의 문법에 따라 함수의 본문에서 바로 반환되는 값이 있다면 {  , return을 생략할 수 있다.

const hi = () => {
  return () => {
    console.log('hi');
  };
};

// 함수 명은 중복이 안되서 임의로 hi1로 지정함
const hi1 = () => () => {
  console.log('hi1');
};

const hi2 = () => {
  return () => {
    console.log('hi2');
  };
};

const hof = (a) => (b) => (c) => {
  return a + b * c;
};

const hofs = (a) => {
  return (b) => {
    return (c) => {
      return a + b * c;
    };
  };
};

const first = hof(3);
const second = first(4);
const third = second(5);
console.log(third);

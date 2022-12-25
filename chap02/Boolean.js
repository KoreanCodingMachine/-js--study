// true, false;

console.log(typeof true); // boolean
console.log(5 > 3); // true
console.log(5 != 3); // true
console.log(5 != 5); // false

// NaN끼리 비교하기
// NaN는 !=를 제외한 모든 비교 연산에서 false를 출력한다.
console.log(NaN == NaN); // false
console.log(NaN >= NaN); // false
console.log(NaN <= NaN); // false
console.log(NaN > NaN); // false
console.log(NaN < NaN); // false
console.log(NaN != NaN); // true

// true false 쉽게 생각해서 true는 1 , false는 0이라고 생각하면 됨

console.log(true > false); // true

// 문자열끼리의 비교하기

console.log('b' > 'a'); // true
console.log('ab' > 'a'); // true

// charCodeAt()

console.log('a'.charCodeAt()); // 97
console.log('b'.charCodeAt()); // 98

// 다른 자료형간의 비교

console.log('3' < 5); // true
// 빼기 연산처럼 다른 자료형들이 숫자로 형 변환된 후 비교한다.

console.log('abc' < 5); // false
// 'abc'를 숫자로 바꾸면 NaN , NaN에서 비교연산은 !=를 제외하면 false이다.

console.log('0' < true); // true
// '0' - > 0 , true -> 1

// == 과 === 의 차이
// ==는 자동 형변환을 통해 값만 비교하지만 ===은 값과 자료형까지 같은지를 비교한다.

console.log(1 === '1'); // false

console.log(1 === true); // false

console.log(1 === '1'); // false

console.log(1 === 1); // true

// 논리 연산자

console.log(10 > 5 && 6 < 8); // true

console.log(10 < 5 || 6 < 8); // true

console.log(!true); // false

console.log(!false); // true

// 자료형을 bool값으로 형변환하기

console.log(!!'a'); // true

// bool값으로 형 변환 시 false가 되는 값
// 형 변환시 false가 되는 값들을 거짓인 값(falsy value)라고 하고 true인 값을 참인 값(truthy value)라고 한다.

console.log(!!false); // false

console.log(!!''); // false

console.log(!!0); // false

console.log(!!NaN); // false

console.log(!!undefined); // false

console.log(!!null); // false

console.log((5 + 4) * 3 === 27);

console.log(!(5 + 4 * 3 === 27));

// undefined
// 보통 반환할 결과값이 없을 때 나온다. , console.log는 콘솔에 무언가를 출력하지만, 그 자체로는 결과값이 없기 때문에 undefined가 반환된다.

console.log(typeof undefined); // "undefined"

console.log(!!undefined); // false

console.log(undefined == false); // false
console.log(undefined == 0); // false
console.log(undefined == ''); // false

console.log(undefined === false); // false

// null

console.log(undefined == null); // true , 빈 값을 의미한다.
console.log(undefined === null); // false

console.log(!!null); // false

console.log(null == false); // false
console.log(null == 0); // false
console.log(null == ''); // false

// 자바스크립트의 버그 , null값인지 확인하기 위해서는 === null을 사용해야 한다.
console.log(typeof null); // object

console.log(null === null); // true

// null은 리터럴로서 null이라 씁니다. null은 undefined과 같이 글로벌 객체의 속성에 대한 식별자가 아닙니다.
// 대신 null은 식별되지 않은 것을 표현합니다. 즉, 변수가 아무런 객체를 가리키지 않음을 표현합니다.
// API에서는 null을 종종 관련된 객체가 존재하지 않을 때 그 객체 대신 사용합니다.

// 정의되지 않고 초기화된 적도 없는 foo
foo; //ReferenceError: foo is not defined

// 존재하지만 값이나 자료형이 존재하지 않는 foo
var foo = null;
foo; //null

console.log(!!undefined); // false
console.log(!!null); // false

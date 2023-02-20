let d1 = new Date('2023-2-20');
console.log(d1.getFullYear()); // 2023
console.log(d1.getMonth() + 1); // 2

console.log('Date', Date); // Date [Function: Date] (내장 함수)

function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function () {
    return this.first + this.second + this.third;
  };
}

let kim = new Person('kim', 10, 20, 30);
let lee = new Person('Lee', 10, 10, 10);

console.log('Person()', Person()); // undefined

// 생성자 함수
console.log('new Person()', new Person()); // 함수앞에 new 키워드를 붙이면 객체를 생성하는 생성자가 된다. (생성자 함수)
//   Person {
//   name: 'kim',
//   first: 10,
//   second: 20,
//   third: 30,
//   sum: [Function (anonymous)]
// }

console.log(kim.sum()); // 60
console.log(lee.sum()); // 30

// 생성자 함수란 ? 객체를 생성하는 함수로 함수에 new 키워드를 붙인다. (일반함수를 객체로 만들어주는 객체 생성자이다.)
// 장점은 반복해서 코드를 사용할 필요 없이 생성자함수를 이용해서 파라미터값을 함수 안에 작성해 두고
// 미리 만들어둔 생성자함수를 이용해서 객체를 생성할 수 있다.(유지 보수가 용이하다.)

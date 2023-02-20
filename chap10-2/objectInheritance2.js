// js는 subObject가 superObjcet(prototype object)의 상속을 받는다.  (prototype link -> )

let superObj = { superVal: 'super' };

// let subObj = { subVal: 'sub' };
// __proto__ 의 대체제
// superObj를 부모로하는 객체다.
// 프로토링크를 지정해준다.

let subObj = Object.create(superObj);
subObj.subVal = 'sub';

console.log('subObj.subVal =>', subObj.subVal); // sub

// prototype 을 바꾸는것이 아님에 주의하자
subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal); // super
console.log('subObj.superVal =>', subObj.superVal); // sub

let kim = {
  name: 'kim',
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};

console.log(kim.sum()); // 30

let lee = {
  name: 'lee',
  first: 10,
  second: 10,
  avg: function () {
    return (this.first + this.second) / 2;
  },
};

// lee 의 prototype을 kim으로 지정한다.
lee.__proto__ = kim;

let sin = Object.create(kim);

sin.name = 'sin';
sin.first = 50;
sin.second = 50;
sin.avg = function () {
  return (this.first + this.second) / 2;
};

console.log(lee.sum()); // 20
console.log(lee.avg()); // 10
console.log(sin.avg()); // 50
console.log(sin.sum()); // 100

console.log(Math.PI);
console.log(Math.random()); // method (함수가 객체에 소속되어 있을때)
console.log(Math.floor(3.9));

let myMath = {
  PI: Math.PI,
  random: function () {
    return Math.random();
  },
  floor: function (val) {
    return Math.floor(val);
  },
};

console.log('myMathPI', myMath.PI);
console.log('myMathrandom', myMath.random());
console.log('myMathfloor', myMath.floor(3.9));

// 객체 없이 구현
let MyMath_PI = Math.PI;

function MyMath_random() {
  return Math.random();
}

function MyMath_floor(val) {
  return Math.floor(val);
}

// 객체의 필요성 -> 변수를 하나의 컨테이너안에 정의함으로써 충돌을 막는다. (변수 관리가 용이하다.)

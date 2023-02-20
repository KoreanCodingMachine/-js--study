// prototype -> 원형
// js는 prototype based language 이다.

// 프로토타입을 사용하지않고 생성자함수 내에서 메소드나 속성을 정의하면 비효율이 발생함 (사용할때마다 정의해줘야한다.)
// prototype을 활용해 메모리 비용을 절감한다. (prototype으로 메소드를 정의해두면 수정할때만 메소드를 정의하고 수정이 필요하지 않을때는 prototype의 메소드를 찾아감으로 정의 할 필요가 없음)

function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
}

// 성능을 절약할 수 있음 , 객체가 생성될때마다 생성하지 않기 때문에
Person.prototype.sum = function () {
  return 'prototype :' + (this.first + this.second + this.third);
};

// 생성자함수를 사용해서 객체를 생성하고 그 객체내부의 메서드를 수정할 때 생성한 객체마다 일일히 수작업을 해줘야함
// 코드가 1억줄이상이라면 유지,보수하기에 매우 불편함 -> prototype의 필요성

// 기본적으로  객체가 sum이라는 메소드를 정의되어 있다면 그 메소드를 실행한다.
let kim = new Person('kim', 10, 20, 30);
kim.sum = function () {
  return 'this : ' + (this.first + this.second + this.third);
};

// sum이라는 객체가 정의되어 있지 않다면 그 prototype에 메소드가 정의되어 있는지를 찾고 정의되어 있다면 실행한다.
let lee = new Person('Lee', 10, 10, 10);

console.log(kim.sum()); // this :60
console.log(lee.sum()); // prototype :30

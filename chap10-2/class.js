// class는 객체를 만드는 공장이다.
// constructor()를 활용해 객체의 초기상태를 세팅한다.
// 객체가 생성되기 이전 자동으로 실행되도록 약속된 함수이다.

// prototype의 메소등와 마찬가지로 만약 생성자 함수로 만들어진 객체내에 메소드가 정의되어 있을 경우 그 객체내의 메소드를 실행한다.
// 만약 정의되어있지 않다면 그것의 prototype 즉 클래스내에서 정의된 메서드를 찾는다.
class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  //   객체 내의 메소드 정의
  sum() {
    return 'prototype' + (this.first + this.second);
  }
}

let kim = new Person('kim', 10, 20);
console.log('kim', kim); // kim Person { name: 'kim', first: 10, second: 20 }

kim.sum = function () {
  return 'this ' + (this.first + this.second);
};

console.log('kim.sum', kim.sum()); // kim.sum this 30

let lee = new Person('lee', 20, 30);
console.log('lee', lee); // lee Person { name: 'lee', first: 20, second: 30 }
console.log('lee.sum', lee.sum()); // lee.sum prototype50

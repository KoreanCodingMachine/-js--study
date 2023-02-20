/*

super의 필요성
-> 상속된(자식) class에 요소 추가 시 새로 추가되는 parameter를 정의하려면
기존(부모)-class constructor를 다시 정의해 주어야 한다.
이 과정에서 생기는 중복되는 코드가 발생해, error발생 확률 증가, 메모리 낭비 등 매우 비효율적인 낭비가 생긴다.
이러한 부분을 super로 해결할 수 있다.


super의 두가지 용법
1. super(): 부모-class의 생성자(constructor)를 참조한다.
2. super.method() : 부모-class의 prototype-method를 참조한다.

*/

class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  //   객체 내의 메소드 정의
  sum() {
    return this.first + this.second;
  }
}

class PersonPlus extends Person {
  constructor(name, first, second, third) {
    super(name, first, second);
    this.third = third;
  }
  avg() {
    return super.sum() / 2;
  }
}

let kim = new PersonPlus('kim', 10, 20, 30);
console.log(kim.avg()); // 15
console.log(kim.sum()); // 30

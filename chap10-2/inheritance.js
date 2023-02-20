// 클래스간의 상속을 통해서 얻을 수 있는 이점

// 1. 클래스간의 중복 코드를 제거할 수 있다.
// 2. 코드의 유지 보수가 용이해진다.
// 3. 최 상위 클래스만 수정하더라도 동시다발적으로 상속하는 여러 클래스를 수정할 수 있음

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
  avg() {
    return (this.first + this.second) / 2;
  }
}

let kim = new PersonPlus('kim', 10, 20, 30);
console.log(kim.avg()); // 15
console.log(kim.sum()); // 30

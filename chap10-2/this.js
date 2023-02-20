// 객체 안에 메소드(함수)가 있을 때
// 그 메소드가 자신이 속해 있는 객체 내의 값을 사용할 때 객체 이름이 바뀌어도 계속 사용할 수 있게 해주는 키워드다!

// 즉 this가 속해있는 메소드가 속해있는 객체를 가리키도록 약속된 특수한 예약어이다.

let kim = {
  name: 'kim',
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};

console.log('kim.sum(kim.first, kim.second)', kim.sum());

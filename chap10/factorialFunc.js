// 클래스 이전에는 공장함수를 통해서 객체를 생성했다.(객체를 생성하기 위한 템플릿)
// 공장함수 -> 객체를 반환하는 함수

function createMonster(name, hp, att, xp) {
  return { name, hp, att, xp };
}

const monster1 = createMonster('슬라임', 25, 10, 100);
const monster2 = createMonster('슬라임', 25, 10, 100);
const monster3 = createMonster('슬라임', 25, 10, 100);

// 당연한 이야기지만 각각의 객체는 참조관계를 가져서는 안된다.
// 왜 why
// 생성한 객체를 수정,삭제 할 때 참조관계를 가진다면 의도하지 않는 객체도 변환될 수 있기 때문에

console.log('monster1', monster1); // monster1 { name: '슬라임', hp: 25, att: 10, xp: 100 }
console.log('monster2', monster2); // monster2 { name: '슬라임', hp: 25, att: 10, xp: 100 }
console.log('monster3', monster3); // monster3 { name: '슬라임', hp: 25, att: 10, xp: 100 }

// this를 활용

function Monster(name, hp, att, xp) {
  this.name = name;
  this.hp = hp;
  this.att = att;
  this.xp = xp;
}

const monster4 = new Monster('슬라임', 25, 10, 11); // 생성자 함수 , new 키워드와 함께 사용한다.
const monster5 = new Monster('슬라임', 25, 10, 11);
const monster6 = new Monster('슬라임', 25, 10, 11);

class Monster3 {
  constructor(name, hp, att, xp) {
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.xp = xp;
  }
}

const monster7 = new Monster3('슬라임', 25, 10, 11);
const monster8 = new Monster3('슬라임', 25, 10, 11);
const monster9 = new Monster3('슬라임', 25, 10, 11);

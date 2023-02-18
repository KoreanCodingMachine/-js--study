// 생성자 함수에서 메서드를 추가할 때 prototype이라는 속성 안에 추가해야한다.
// prototype안에 추가한 메서드를 프로토타입 메서드라고 한다.

function Monster(name, hp, att, xp) {
  this.name = name;
  this.hp = hp;
  this.att = att;
  this.xp = xp;
}

Monster.prototype.attack = function (monster) {
  monster.hp -= this.att;
  this.hp -= monster.att;
};

Monster.prototype.heal = function (monster) {
  this.hp += 20;
  this.hp -= monster.att;
};

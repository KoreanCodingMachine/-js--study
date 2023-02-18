const b = {
  name: 'jh',
  sayName() {
    console.log(this === b);
  },
};

b.sayName(); // true

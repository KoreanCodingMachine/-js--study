const array = [1, 2];
const shallowCopy = [...array];
console.log(array === shallowCopy); // false
console.log(array[0] === shallowCopy[0]); // true


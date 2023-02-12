const array = [1, 'hello', undefined, false];

const callback = (data) => {
  if (data === null) {
    return false;
  } else {
    return true;
  }
};

console.log(array.every(callback));

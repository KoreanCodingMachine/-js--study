function test() {
  let result = '';

  if (a) {
    if (!b) {
      result = 'C';
    }
  } else {
    result = 'a';
  }
  result += 'b';
  return result;
}

function test3() {
  let result = '';

  if (!a) {
    result = 'a';
    result += 'b';
    return result;
  }
  if (!b) {
    result = 'C';
  }
  result += 'b';
  return result;
}

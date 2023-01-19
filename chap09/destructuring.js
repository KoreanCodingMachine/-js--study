const obj = {
  a: 'hello',
  b: {
    c: 'hi',
    d: { e: 'wow' },
  },
};

// const {
//   a,
//   b: {
//     c,
//     d: { e },
//   },
// } = obj;

const { a, b } = obj;

const {
  c,
  d: { e },
} = b;

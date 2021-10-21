const foo1 = (foo2, num) => {
  for (let i = 0; i < num; i++) {
    foo2();
  }
};

module.exports = foo1;

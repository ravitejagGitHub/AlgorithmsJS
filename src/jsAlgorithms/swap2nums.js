/**
Question: How would you swap two numbers without using a temporary variable?


*/

const swap2nums = function() {
  let a = 10,
    b = 20;

  console.log(`a:${a}  b:${b}`);
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(`a:${a}  b:${b}`);

  let x = 10,
    y = 20;

  console.log(`x:${x}  y:${y}`);
  [y, x] = [x, y];
  console.log(`x:${x}  y:${y}`);
};
module.exports = swap2nums;

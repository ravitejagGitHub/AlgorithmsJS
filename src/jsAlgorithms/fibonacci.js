/**
Question: How do get nth Fibonacci number?

Answer: I create an array and start from iterate through.

Fibonacci series is one of the most popular interview question for beginners. so, you have to learn this one.

*/
const fib_mem = {};
const fibonacci = function(num) {
  if(fib_mem[num]) {
    return fib_mem[num];
  }
  if (num <= 1) {
    return num;
  } else {
    fib_mem[num] = fibonacci(num - 1) + fibonacci(num - 2);
  }
  return fib_mem[num];
};
module.exports = fibonacci;

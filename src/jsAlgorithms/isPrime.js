/**
1. check Prime
Question: How would you verify a prime number?

Answer: a prime number is only divisible by itself and 1. So, i will run a while loop and increase by 1. (look at the code example. If you dont get it. this is not your cake. do learn javaScript basics and come back.)
*/
const isPrime = function(num) {
  let divisor = 2;
  const max_divisor = parseInt(Math.sqrt(num), 10);

  while (divisor <= max_divisor) {
    if (num % divisor === 0) {
      return false;
    }
    divisor++;
  }
  return true;
};
module.exports = isPrime;

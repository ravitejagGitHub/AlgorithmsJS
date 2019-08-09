function primeFactors(n) {
  var factors = [],
    divisor = 2;

  while (n > 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      if (divisor > 2) {
        divisor += 2;
      } else {
        divisor++;
      }
    }
  }
  return factors;
}

console.log(primeFactors(230));

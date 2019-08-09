/**
 4. Greatest Common Divisor
 Question: How would you find the greatest common divisor of two numbers?
 */

const greatestCommonDivision = function(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return greatestCommonDivision(num2, num1 % num2);
};
module.exports = greatestCommonDivision;

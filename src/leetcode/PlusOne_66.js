const PlusOne = function(digits) {
  let carry = 1;
  let i = digits.length - 1;
  while (i >= 0) {
    let sum = digits[i] + carry;
    digits[i] = sum % 10;
    if (sum >= 10) {
      carry = 1;
      i--;
    } else {
      carry = 0;
      break;
    }
  }
  if (i === -1 && carry == 1) {
    return [1].concat(digits);
  }

  return digits;
};

module.exports = PlusOne;

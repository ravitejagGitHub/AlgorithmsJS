/**
Question: How would you swap two numbers without using a temporary variable?


*/

const strReverse = function(string) {
  let strArr = string.split("");
  let i = 0,
    j = strArr.length - 1,
    tmp;

  while (i < j) {
    tmp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = tmp;
    i++;
    j--;
  }
  return strArr.join("");
 // return string.split("").reverse().join("");
};
module.exports = strReverse;

/*
Input : ["98", "95", "889", "99996", "9","99","991"]
Ouput : "999999969919895889" : ["9", "99", "99996", "991", "98", "95", "889"].join("")
 */
/**
 * Largest Number Formed From Array Elements.
 * @param {Numbers} arr - array of number in string format
 */
const LargestNumberFormedFromArrayElements = function(arr) {
  return arr.sort((a, b) => (b + a) - (a + b));
};

module.exports = LargestNumberFormedFromArrayElements;

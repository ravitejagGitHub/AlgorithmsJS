/**
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S. 

*/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var maxSlidingWindow = function(s, t) {
  let minLength = s.length + 1;
  let lettersCount = t.length;
  let lettersCountMap = new Map();
  let substr = "";
  for (let i = 0; i < t.length; i++) {
    //ABBC: {"A" => 1, "B" => 2, "C" => 1}
    lettersCountMap.set(
      t[i],
      lettersCountMap.has(t[i]) ? lettersCountMap.get(t[i]) + 1 : 1
    );
  }
  for (let left = (right = 0); right < s.length; right++) {
    let char = s[right];
    if (lettersCountMap.has(char)) {
      lettersCountMap.set(char, lettersCountMap.get(char) - 1);
      if (lettersCountMap.get(char) >= 0) {
        lettersCount--;
      }
    }

    while (lettersCount === 0) {
      if (right + 1 - left < minLength) {
        minLength = right + 1 - left;
        substr = s.substr(left, minLength);
      }
      if (lettersCountMap.has(s[left])) {
        lettersCountMap.set(s[left], lettersCountMap.get(s[left]) + 1);
        if (lettersCountMap.get(s[left]) > 0) {
          lettersCount++;
        }
      }
      left++;
    }
  }

  return substr;
};

module.exports = maxSlidingWindow;

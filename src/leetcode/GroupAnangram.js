/*
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
*/
var sortString = function(str) {
  return str
    .split("")
    .sort()
    .join("");
};
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let hasMap = new Map();
  let tmpStr = null, result = [];
  strs.forEach((str, index) => {
    tmpStr = sortString(str); // srt string characters.
    if (hasMap.has(tmpStr)) {
      hasMap.get(tmpStr).push(str);
    } else {
      hasMap.set(tmpStr, [str]);
    }
  });
  hasMap.forEach(value => result.push(value)); // concat all values.
  return result;
};

module.exports = groupAnagrams;

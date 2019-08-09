/**
Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character
Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
*/

const minDistance = function(str1, str2, str1Len, str2Len, dp) {
  if (str1Len === -1 && str2Len === -1) {
    return 0;
  }
  if (str2Len === -1) {
    return str1Len + 1;
  }
  if (str1Len === -1) {
    return str2Len + 1;
  }

  if (dp[str1Len][str2Len] === 0) {
    if (str1[str1Len] === str2[str2Len]) {
      dp[str1Len][str2Len] = minDistance(
        str1,
        str2,
        str1Len - 1,
        str2Len - 1,
        dp
      );
    } else {
      dp[str1Len][str2Len] =
        1 +
        Math.min(
          minDistance(str1, str2, str1Len - 1, str2Len - 1, dp), //replace
          minDistance(str1, str2, str1Len, str2Len - 1, dp), //insert
          minDistance(str1, str2, str1Len - 1, str2Len, dp) //delete
        );
    }
  }
  return dp[str1Len][str2Len];
};

module.exports = (str1, str2) => {
  const str1Len = str1.length;
  const str2Len = str2.length;
  const dp = require("./lib/twoDimMem")(str1Len, str2Len);
  min = minDistance(str1, str2, str1Len - 1, str2Len - 1, dp);

  console.table(min);
  console.table(dp);
};

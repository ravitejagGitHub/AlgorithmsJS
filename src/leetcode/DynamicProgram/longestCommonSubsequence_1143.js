/**
Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

If there is no common subsequence, return 0.

 

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
*/

let max = 0;

const longestCommonSubsequence = function(str1, str2, str1Len, str2Len, dp) {
  if (str1Len === -1 || str2Len === -1) {
    return 0;
  }

  if (dp[str1Len][str2Len] === 0) {
    if (str1[str1Len] === str2[str2Len]) {
      dp[str1Len][str2Len] =
        1 + longestCommonSubsequence(str1, str2, str1Len - 1, str2Len - 1, dp);
    } else {
      dp[str1Len][str2Len] = Math.max(
        longestCommonSubsequence(str1, str2, str1Len - 1, str2Len, dp),
        longestCommonSubsequence(str1, str2, str1Len, str2Len - 1, dp)
      );
    }
  }
  if (dp[str1Len][str2Len] > max) {
    max = dp[str1Len][str2Len];
  }
  return dp[str1Len][str2Len];
};

module.exports = (str1, str2) => {
  const str1Len = str1.length;
  const str2Len = str2.length;
  const dp = require("./lib/twoDimMem")(str1Len, str2Len);
  max = longestCommonSubsequence(str1, str2, str1Len - 1, str2Len - 1, dp);
  console.log(max);
};

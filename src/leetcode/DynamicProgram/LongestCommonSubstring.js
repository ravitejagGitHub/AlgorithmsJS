/**
Given two strings X and Y. The task is to find the length of the longest common substring.

*/

let max = 0;
let maxStr1Index = 0;
let maxStr2Index = 0;

const longestCommonSubString = function(str1, str2, str1Len, str2Len, dp) {
  if (str1Len === -1 || str2Len === -1) {
    return 0;
  }
  if (dp[str1Len][str2Len] === 0) {
    if (str1[str1Len] === str2[str2Len]) {
      dp[str1Len][str2Len] =
        1 + longestCommonSubString(str1, str2, str1Len - 1, str2Len - 1, dp);
    } 
    longestCommonSubString(
      str1,
      str2,
      str1Len - 1,
      str2Len,
      dp
    );
    longestCommonSubString(
      str1,
      str2,
      str1Len,
      str2Len - 1,
      dp
    );
  }
  if (dp[str1Len][str2Len] > max) {
    max = dp[str1Len][str2Len];
    maxStr1Index = str1Len;
    maxStr2Index = str2Len;
  }
  return dp[str1Len][str2Len];
};

module.exports = (str1, str2) => {
  const str1Len = str1.length;
  const str2Len = str2.length;
  const dp = require("./lib/twoDimMem")(str1Len, str2Len);
  longestCommonSubString(str1, str2, str1Len - 1, str2Len - 1, dp);
  if (max > 0) {
    console.log(max);
    console.log(str1.substr(maxStr1Index - max + 1, max));
    console.table(dp);
  } else {
    console.log("No substring.");
  }
};

/**
Question: How can you match substring of a sting?

Answer: Will use to pointer (one for string and another for the substring) while iterating the string. And will have another variable to hold the starting index of the initial match.
*/

const substring = function(str, substr) {
  strlen = str.length;
  substrLen = substr.length;
  for (let i = 0, j = 0, idx = 0; i < strlen; i++) {
    if (str[i] === substr[j]) {
      if (j == 0) {
        idx = i;
      }
      j++; //char match go to next char
    } else {
      j = 0; // move to first char of substring.
    }

    if (j === substrLen) {
      //substring found
      return idx;
    }
  }
  return -1;
};
module.exports = substring;

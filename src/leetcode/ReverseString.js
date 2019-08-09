const ReverseString = function(str, endIndex) {
  if (endIndex === -1) {
    return "";
  }
  return str[endIndex] + ReverseString(str, endIndex - 1);
};

module.exports = str => ReverseString(str, str.length - 1);

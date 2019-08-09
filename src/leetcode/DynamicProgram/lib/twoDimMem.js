module.exports = function twoDimMem(row, col) {
  let arr = new Array(row);
  for (let i = 0; i < row; i++) {
    arr[i] = new Array(col).fill(0);
  }
  return arr;
};

/**
 You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
Example 2:

Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
 */

var swap = function(m, i1, j1, i2, j2) {
  let tmp = m[i1][j1];
  m[i1][j1] = m[i2][j2];
  m[i2][j2] = tmp;
};
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let n = matrix.length;
  //swap rows  - up and down
  for (let i = 0; i < parseInt(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      swap(matrix, i, j, n - 1 - i, j);
    }
  }
  //swap symetric positions
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      swap(matrix, i, j, j, i);
    }
  }
  return matrix;
};

module.exports = rotate;

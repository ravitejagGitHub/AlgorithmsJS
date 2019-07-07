/**
 You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 */

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  return climbStairs(n - 2) + climbStairs(n - 1);
};

/**
 * Dynamic program approach
 * @param {number} n
 * @return {number}
 */
const mem = {};
const climbStairs_DP = function(n) {
  if (mem[n] !== undefined) {
    return mem[n];
  }
  
  if (n < 0) {
    return 0;
  }
  if (n === 0) {
    return 1;
  }
  mem[n] = climbStairs_DP(n - 2) + climbStairs_DP(n - 1);
  return mem[n];
};

module.exports = {
  climbStairs,
  climbStairs_DP
};

/**
 * Write a program to find the nth super ugly number.

Super ugly numbers are positive numbers whose all prime factors are in the given prime list primes of size k.

Example:

Input: n = 12, primes = [2,7,13,19]
Output: 32 
Explanation: [1,2,4,7,8,13,14,16,19,26,28,32] is the sequence of the first 12 
             super ugly numbers given primes = [2,7,13,19] of size 4.
Note:

1 is a super ugly number for any given primes.
The given numbers in primes are in ascending order.
0 < k ≤ 100, 0 < n ≤ 106, 0 < primes[i] < 1000.
The nth super ugly number is guaranteed to fit in a 32-bit signed integer.
 */

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
  let indices = [];
  let curr_nums = [];
  let results = [1]; //first ugly number
  const primesLength = primes.length;
  for (let i = 0; i < primesLength; i++) {
    indices[i] = 0;
  }
  while (results.length < n) {

    // calculate the next multiple of all the primes
    for (let i = 0; i < primesLength; i++) {
      curr_nums[i] = results[indices[i]] * primes[i];
    }

    let next_ugly_num = Math.min(...curr_nums); //Minimum number

    results.push(next_ugly_num);

    //we increase the index so next round we find the next multiple of that prime
    for (let i = 0; i < primesLength; i++) {
      if ((next_ugly_num === curr_nums[i])) { 
        indices[i] += 1;
      }
    }
  }
  return results[results.length - 1];
};


module.exports = nthSuperUglyNumber;
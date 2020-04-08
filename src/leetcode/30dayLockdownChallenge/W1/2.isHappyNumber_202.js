/**
 * https://leetcode.com/problems/happy-number/
 * 
  Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

 * 
/*
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = fast = n;
    do {
        slow = sumOfSquares(slow);        
        fast = sumOfSquares(sumOfSquares(fast));     
    } while(slow !== fast && (slow !== 1 || fast !== 1))
    
    return (slow===1);
};

var sumOfSquares= function(num) {
    let sum = 0;
    while(num>0) {
        sum+=Math.pow(num%10,2)
        num =Math.floor(num/10)
    }
    return sum;
};

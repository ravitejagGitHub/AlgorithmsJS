/**
 Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Example 1:

Input: [1,3,4,2,2]
Output: 2
Example 2:

Input: [3,1,3,4,2]
Output: 3
Note:

You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.

Approach #3 Floyd's Tortoise and Hare (Cycle Detection) [Accepted]
Intuition

Algorithm

First off, we can easily show that the constraints of the problem imply that a cycle must exist. 
Because each number in nums is between 1 and n, it will necessarily point to an index that exists. 
Therefore, the list can be traversed infinitely, which implies that there is a cycle. 

Additionally, because 0 cannot appear as a value in nums, nums[0] cannot be part of the cycle. 
Therefore, traversing the array in this manner from nums[0] is equivalent to traversing a cyclic linked list. 
Given this, the problem can be solved just like Linked List Cycle II.

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let slowPointer = (fastPointer = nums[0]);
  do {
    slowPointer = nums[slowPointer];
    fastPointer = nums[nums[fastPointer]];
  } while (slowPointer !== fastPointer);

  let p1 = slowPointer;
  let p2 = nums[0];
  while (p1 !== p2) {
    p1 = nums[p1];
    p2 = nums[p2];
  }
  return p1;
};

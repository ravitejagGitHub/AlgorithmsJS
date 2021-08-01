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

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
export function findDuplicate2(nums: number[]): number {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return nums[i];
    }
    map.set(nums[i], i);
  }
  
  return -1;
};



/**
 * @param {number[]} nums
 * @return {number}
 */
 export function findDuplicate(nums: number[]): number {
   let slowPointer = nums[0];
   let fastPointer = nums[0];
   do  {
     slowPointer = nums[slowPointer];
     fastPointer = nums[nums[fastPointer]];
   } while(slowPointer !== fastPointer)
  
   fastPointer = nums[0];
   while (slowPointer !== fastPointer) {
     slowPointer = nums[slowPointer];
     fastPointer = nums[fastPointer];
   }
  return slowPointer;
};

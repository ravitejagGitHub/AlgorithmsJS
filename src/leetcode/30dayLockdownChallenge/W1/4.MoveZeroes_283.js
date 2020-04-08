/**
 * 
 https://leetcode.com/problems/move-zeroes/

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/
// Solution 1;
 var moveZeroes = function(nums) {
    let ans = [],ansStartIndex=0,ansLastIndex= nums.length-1;
    nums.forEach((num,index)=>{
        if(num===0) {
            ans[ansLastIndex--] = num;
        } else{
             ans[ansStartIndex++] = num;
        }
    });
    return ans;
};

// Solution 2;
var moveZeroes = function(nums) {
    let p1= 0;
    let p2=nums.length-1;
    while(p1>0) {
        if(nums[p1]===0) {
            let pos1=p1;
            for(let i=p1+1;i<p2;i++) {
                a[pos1++]=a[i];
            }
        }
    }
    return nums;
    
};

// Solution 3;
var moveZeroes = function(nums) {
    let lastNonZeroFoundAt = 0;
    let cur = 0;
    while ( cur < nums.length) {
        if (nums[cur] != 0) { //swap values
            let temp = nums[lastNonZeroFoundAt];
            nums[lastNonZeroFoundAt]=nums[cur];
            nums[cur]= temp;
            lastNonZeroFoundAt++;
        }
        cur++;
    }
};


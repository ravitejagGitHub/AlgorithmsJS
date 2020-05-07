/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let mid,left =0, right= nums.length-1;
    while(left<=right) {
        mid = parseInt((left+right)/2,10);
        
        if(target === nums[mid]) {
            return mid;
        } else if(nums[mid]>=nums[left]) {
            if(target>=nums[left] && target<nums[mid]) {
                right = mid-1;
            } else {
                left = mid+1;
            }
        } else {
            if(target>nums[mid] && target<=nums[right]) {
                left = mid+1;
            } else {
                right = mid-1;
            }
        }
    }
    return -1;
    
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    return nums.reduce((result, val)=> {
        return result^val;
    });
};
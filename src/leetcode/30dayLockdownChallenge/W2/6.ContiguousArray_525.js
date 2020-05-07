/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let map = new Map();
       map.set(0, -1);
       let maxlen = 0, count = 0;
       for (let i = 0; i < nums.length; i++) {
           count = count + (nums[i] == 1 ? 1 : -1);
           if (map.has(count)) {
               maxlen = Math.max(maxlen, i - map.get(count));
           } else {
               map.set(count, i);
           }
       }
       return maxlen;
};
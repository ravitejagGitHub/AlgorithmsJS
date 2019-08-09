const makeZigZagArray = function(nums) {
  let numsLength = nums.length;
  let evenCount = (oddCount = 0);
  for (let i = 0; i < numsLength; i++) {
    let minVal;
    if (i === 0 && i + 1 < numsLength) {
      minVal = nums[i + 1];
    } else if (i === numsLength - 1 && i - 1 >= 0) {
      minVal = nums[i - 1];
    } else {
      minVal = Math.min(nums[i - 1], nums[i + 1]);
    }
    if (nums[i] >= minVal) {
      if (i % 2 === 0) { //even index
        evenCount += nums[i] - minVal + 1;
      } else {//odd index
        oddCount += nums[i] - minVal + 1;
      }
    }
  }
  console.log(Math.min(evenCount, oddCount));
  return Math.min(evenCount, oddCount);
};
module.exports = makeZigZagArray;

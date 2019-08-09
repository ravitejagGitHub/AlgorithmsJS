/**
 Given an unsorted array with unique numbers. Find all pairs with equal sums. 
 
 Example: 1 Input: [9, 4, 3, 1, 7, 12] 
 Output: [1, 12] & [4, 9]; [3, 7] & [1, 9]; [4, 12] & [7, 9]
 */
const FindPairsWithEqualSum = function(nums) {
  let pairComb = new Map();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      sum = nums[i] + nums[j];
      let value = pairComb.get(sum);
      value = value ? value : [];
      value.push([nums[i], nums[j]]);
      pairComb.set(sum, value);
    }
  }
  let final = [];
  pairComb.forEach(pair => {
    if (pair.length > 1) {
         final.push(pair);
    }
  });
  return final;
};

module.exports = FindPairsWithEqualSum;

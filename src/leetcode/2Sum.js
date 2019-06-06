/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let i;
  if (nums.length < 2) {
    return -1;
  }

  let memory = {};
  for (i = 0; i < nums.length; i++) {
    memory[nums[i]] = [target - nums[i], i];
  }

  for (i = 0; i < nums.length; i++) {
    comp = memory[memory[nums[i]][0]];
    if (comp && i !== comp[1]) {
      return [i, comp[1]];
    }
  }
  return -1;
};

// //approch2
var twoSum = function(nums, target) {
  let i;
  if (nums.length < 2) {
    return -1;
  }

  let map = {},
    complement;

  for (i = 0; i < nums.length; i++) {
    complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
  return -1;
};

// //approch2 with lib HasMap
const HashMap = require("./lib/hash-map");

var twoSum = function(nums, target) {
  let i;
    if (nums.length < 2) {
      return -1;
    }

  let map = new HashMap(),
    complement;

  for (i = 0; i < nums.length; i++) {
    complement = target - nums[i];
    if (map.contains(complement)) {
      return [map.get(complement), i];
    }
    map.add(nums[i], i);
  }
  return -1;
};
module.exports = twoSum;

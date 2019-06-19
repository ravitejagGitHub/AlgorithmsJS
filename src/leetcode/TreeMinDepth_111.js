/*
Input:
    3
   / \
  9  20
    /  \
   15   7

Output:
2
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepthRecurrsive = function(root) {
  if (root === null) {
    return 0;
  }
  let left = minDepthRecurrsive(root.left);
  let right = minDepthRecurrsive(root.right);

  if (left == 0) {
    return right + 1;
  }

  if (right == 0) {
    return left + 1;
  }

  return 1 + Math.min(left, right);
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepthIterative = function(root) {
  let depthValue = [], depthOfLeaveNodes = [];
  let stack = [];
  let curr_node = root,
    min = 0;
  if (root === null) {
    return min;
  }
  stack.push(root);
  depthValue.push(1);
  while (stack.length !== 0) {
    curr_node = stack.pop();
    current_depthValue = depthValue.pop();
    if(curr_node.left === null && curr_node.right == null) {
      depthOfLeaveNodes.push(current_depthValue);
    }
    if (curr_node.left !== null) {
      stack.push(curr_node.left);
      depthValue.push(current_depthValue + 1);
    }
    if (curr_node.right !== null) {
      stack.push(curr_node.right);
      depthValue.push(current_depthValue + 1);
    }
  }

  return Math.min(...depthOfLeaveNodes);
};

module.exports = { minDepthRecurrsive, minDepthIterative };

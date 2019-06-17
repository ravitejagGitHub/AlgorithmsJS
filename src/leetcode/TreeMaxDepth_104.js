/*
Input:
    3
   / \
  9  20
    /  \
   15   7

Output:
3
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepthRecurrsive = function(root) {
  if (root === null) {
    return 0;
  }
  return 1 + Math.max(maxDepthRecurrsive(root.left), maxDepthRecurrsive(root.right));
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepthIterative = function(root) {
  let depthValue = [];
  let stack = [];
  let curr_node = root,
    max = 0;
  if (root === null) {
    return 0;
  }
  stack.push(root);
  depthValue.push(1);
  while (stack.length !== 0) {
    curr_node = stack.pop();
    current_depthValue = depthValue.pop();
    max = Math.max(current_depthValue, max);
    if (curr_node.left !== null) {
      stack.push(curr_node.left);
      depthValue.push(current_depthValue + 1);
    }
    if(curr_node.right !== null) {
      stack.push(curr_node.right);
      depthValue.push(current_depthValue + 1);
    }
  }

  return max;
};

module.exports =  { maxDepthRecurrsive, maxDepthIterative };

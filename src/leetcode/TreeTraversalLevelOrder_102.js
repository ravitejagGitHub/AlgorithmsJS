/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
  let levelOrderArr = [],
    stack = [];
  let curr_node = root;
  if(root === null)   {
    return [];
  }
  stack.push(curr_node);
  while (stack.length !== 0) {
    let childNodes = [],
      i = 0;
    while (i < stack.length) {
      curr_node = stack[i];
      if (curr_node.left !== null) {
        childNodes.push(curr_node.left);
      }
      if (curr_node.right !== null) {
        childNodes.push(curr_node.right);
      }
      i++;
    }
    if (stack.length > 0) {
      levelOrderArr.push(stack.map(node=>node.val));
    }
    stack = childNodes;
  }
  return levelOrderArr;
};

module.exports = levelOrder;

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preOrderTraversal = function(root) {
  let preOrderArray = [];
  let stack = [];
  let curr_node = root,
    node;
  while (curr_node !== null || stack.length !== 0) {
    while (curr_node !== null) {
      stack.push(curr_node);
      preOrderArray.push(curr_node.val);
      curr_node = curr_node.left;
    }
    node = stack.pop();
    curr_node = node.right;
  }

  return preOrderArray;
};

const preOrderRecursive = function(root, order) {
  if (root !== null) {
    order.push(root.val);
    preOrderRecursive(root.left, order);
    preOrderRecursive(root.right, order);
  }
  return order;
};

module.exports = {
  preOrderTraversal,
  preOrderRecursive: root => preOrderRecursive(root, [])
};

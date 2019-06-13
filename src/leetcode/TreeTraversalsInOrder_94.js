/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function(root) {
  let inOrderArray = [];
  let stack = [];
  let curr_node = root,
    node;
  while (curr_node !== null || stack.length !== 0) {
    while (curr_node !== null) {
      stack.push(curr_node);
      curr_node = curr_node.left;
    }
    node = stack.pop();
    inOrderArray.push(node.val);
    curr_node = node.right;
  }

  return inOrderArray;
};

const inOrderRecursive = function(root, order) {
  if (root !== null) {
    inOrderRecursive(root.left, order);
    order.push(root.val);
    inOrderRecursive(root.right, order);
  }
  return order;
};

module.exports = {
  inorderTraversal,
  inOrderRecursive: root => inOrderRecursive(root, [])
};

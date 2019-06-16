/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const postOrderTraversal = function(root) {
  let postOrderArray = [];
  let stack = [];
  let curr_node = root,
    node,
    prevNode;
  while (curr_node !== null || stack.length !== 0) {
    while (
      curr_node !== null &&
      curr_node.left !== prevNode &&
      curr_node.right !== prevNode
    ) {
      //push to stack only if childs nodes are already visisted
      stack.push(curr_node);
      curr_node = curr_node.left;
    }
    if (stack.length > 0) {
      curr_node = stack[stack.length - 1]; //top element
      if (curr_node.right === null || curr_node.right === prevNode) {
        // take node if no right child or right child already visisted.
        node = stack.pop();
        postOrderArray.push(node.val);
        prevNode = node;
        curr_node = stack.length > 0 ? stack[stack.length - 1] : null;
      } else {
        prevNode = curr_node;
        curr_node = curr_node.right;
      }
    }
  }

  return postOrderArray;
};

const postOrderRecursive = function(root, order) {
  if (root !== null) {
    postOrderRecursive(root.left, order);
    postOrderRecursive(root.right, order);
    order.push(root.val);
  }
  return order;
};

const postOrderUsingWithQueue = function(root) { //with Queue/LinkedList and stack
  let postOrderArray = [],
    stack = [];
  let curr_node = root;

  while (curr_node !== null || stack.length !== 0) {
    postOrderArray.unshift(curr_node.val);
    if (curr_node.left !== null) {
      stack.push(curr_node.left);
    }
    if (curr_node.right !== null) {
      stack.push(curr_node.right);
    }
    curr_node = stack.length > 0 ?  stack.pop(): null;
  }
  return postOrderArray;
};

module.exports = {
  postOrderTraversal,
  postOrderRecursive: root => postOrderRecursive(root, []),
  postOrderUsingWithQueue
};

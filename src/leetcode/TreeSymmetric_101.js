/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function(left, right) {
  if (left === null || right === null) {
    return left === right;
  }
  return left.val === right.val && isSymmetric(left.right, right.left) && isSymmetric(left.left, right.right);
};

module.exports =  root => isSymmetric(root, root);


/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null) {
    return false;
  }
  if (p.val === q.val) {
    return isSameTree(p.left, q.left) &&  isSameTree(p.right, q.right);
  }
  return false;

  /** short hand
    if (p === null || q === null) {
        return p===q;
   }
   return p.val === q.val && isSameTree(p.left, q.left) &&  isSameTree(p.right, q.right);
   */
};

module.exports = isSameTree;

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (p === null || q === null) {
    return p === q;
  }
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const isSubtree = function(s, t) {
  if (s === null || t === null) {
    return s === t;
  }
  return isSameTree(s,t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

module.exports = isSubtree;

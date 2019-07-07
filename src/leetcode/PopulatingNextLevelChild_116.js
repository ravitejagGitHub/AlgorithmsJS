/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const PopulatingNextLevelChild = function(root) {
  let levelNodes = [],
    curr_node = root,
    i;
  let childNodes;
  if (root === null) {
    return root;
  }
  levelNodes.push(root);
  while (levelNodes.length > 0) {
    childNodes = [];
    i = 0;
    while (i < levelNodes.length) {
      curr_node = levelNodes[i];
      if (curr_node.left !== null) {
        childNodes.push(curr_node.left);
      }
      if (curr_node.right !== null) {
        childNodes.push(curr_node.right);
      }
      i++;
    }
    childNodes.forEach((node, index) => {
      if (index < childNodes.length - 1) {
        node.next = childNodes[index + 1];
      }
    });
    levelNodes = childNodes;
  }
  return root;
};

module.exports = PopulatingNextLevelChild;

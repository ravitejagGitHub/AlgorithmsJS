import { TreeNode } from "../Tree/NumberTreeNode";
import { rightView } from "../Tree/RightView";

function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) {
        return true;
    }

    return isSymmetricHelp(root.left, root.right);
};

function isSymmetricHelp(left: TreeNode| null , right: TreeNode | null): boolean {

    if (left === null || right === null) {
        return left === right;
    }

    return left.val === right.val &&
        isSymmetricHelp(left.left, right.right) &&
        isSymmetricHelp(left.right, right.left)
}
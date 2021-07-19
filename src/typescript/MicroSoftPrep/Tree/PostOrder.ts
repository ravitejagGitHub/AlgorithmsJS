import { TreeNode } from "./NumberTreeNode";


export function postOrder(root: TreeNode): number[] {
    const stack: TreeNode[] = [];
    const postOrderArray: number[] = [];
    let curr_node: TreeNode | null = root;
    while (curr_node !== null || stack.length > 0) {
        if (curr_node !== null) {
            postOrderArray.unshift(curr_node.val);
            if (curr_node.left !== null) {
                stack.push(curr_node.left);
            }
            if (curr_node.right !== null) {
                stack.push(curr_node.right);
            }
        }
        curr_node = stack.length > 0 ? stack.pop() as TreeNode : null;
    }

    return postOrderArray;
}
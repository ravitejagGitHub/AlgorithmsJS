import { TreeNode } from "./NumberTreeNode";


export function preOrder(root: TreeNode): number[] {
    const stack: TreeNode[] = [];
    const preOrderArray: number[] = [];
    let curr_node = root;
    while (curr_node !== null || stack.length > 0) {
        while (curr_node !== null) {
            stack.push(curr_node);
            preOrderArray.push(curr_node.val);
            curr_node = curr_node.left;
        }
        let node = stack.pop() as TreeNode;
        curr_node = node.right;
    }

    return preOrderArray;
}
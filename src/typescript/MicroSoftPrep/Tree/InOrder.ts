import { TreeNode } from "./NumberTreeNode";


export function inOrder(root: TreeNode): number[] {
    const stack: TreeNode[] = [];
    const inOrderArray: number[] = [];

    let curr_node = root;
    while (curr_node !== null || stack.length > 0) {
        while (curr_node !== null) {
            stack.push(curr_node);
            curr_node = curr_node.left;
        }
        let node = stack.pop() as TreeNode;
        inOrderArray.push(node.val);
        curr_node = node.right;
    }

    return inOrderArray;
}
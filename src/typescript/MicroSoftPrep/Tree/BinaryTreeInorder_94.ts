import { TreeNode } from "../../lib/Tree/NumberTreeNode";

export function inorderTraversal2(root: TreeNode | null, inOrderArray: number[]= []): number[] {
    if(root !== null) {
        inorderTraversal2(root.left, inOrderArray);
        inOrderArray.push(root.val);
        inorderTraversal2(root.right, inOrderArray);
    }
    return inOrderArray;
};


export function inorderTraversal(root: TreeNode | null): number[] {
    const inOrderArray: number[] = [];
    const stack: TreeNode[] = [];

    let curr_node = root;

    while (curr_node !== null || stack.length > 0) {
        while (curr_node !== null) {
            stack.push(curr_node);
            curr_node = curr_node.left;
        }
        curr_node = stack.pop() as TreeNode;
        inOrderArray.push(curr_node.val);
        curr_node = curr_node.right;
    }
    return inOrderArray;
};


import { TreeNode } from "./NumberTreeNode";

export function postorderTraversal2(root: TreeNode | null, postOrderArray: number[]= []): number[] {
    if(root !== null) {
        postorderTraversal2(root.left, postOrderArray);
        postorderTraversal2(root.right, postOrderArray);
        postOrderArray.push(root.val);
    }
    return postOrderArray;
};


export function postorderTraversal(root: TreeNode | null): number[] {
    const postOrderArray: number[] = [];
    const stack: TreeNode[] = [];

    let curr_node = root;

    while (curr_node !== null || stack.length > 0) {
        if (curr_node !== null) {
            postOrderArray.unshift(curr_node.val);

            if (curr_node.left !== null) {
                stack.push(curr_node.left)
            }

            if (curr_node.right !== null) {
                stack.push(curr_node.right);
            }
        }
        curr_node = stack.pop() || null;

    }
    return postOrderArray;
};


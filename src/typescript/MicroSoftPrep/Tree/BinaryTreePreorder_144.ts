import { TreeNode } from "./NumberTreeNode";

export function preorderTraversal2(root: TreeNode | null, postOrderArray: number[]= []): number[] {
    if(root !== null) {
        postOrderArray.push(root.val);
        preorderTraversal2(root.left, postOrderArray);
        preorderTraversal2(root.right, postOrderArray);
    }
    return postOrderArray;
};


export function preorderTraversal(root: TreeNode | null): number[] {
    const preOrderArray: number[] = [];
    const stack: TreeNode[] = [];
    let curr_node = root;
    while (curr_node!== null || stack.length> 0) {
        while (curr_node !== null) {
            preOrderArray.push(curr_node.val);
            stack.push(curr_node);
            curr_node = curr_node.left;
        } 
        curr_node = stack.pop() as TreeNode;
        curr_node = curr_node.right;
    }

    
    return preOrderArray;
};


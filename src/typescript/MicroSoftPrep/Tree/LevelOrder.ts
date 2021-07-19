import { TreeNode } from "./NumberTreeNode";


export function levelOrder(root: TreeNode): number[] {
    const queue: TreeNode[] = [];
    const levelOrderArray: number[] = [];
    let curr_node: TreeNode | null = root;
    while (curr_node !== null || queue.length > 0) {
        if (curr_node !== null) {
            levelOrderArray.push(curr_node.val);
            if (curr_node.left !== null) {
                queue.push(curr_node.left);
            }
            if (curr_node.right !== null) {
                queue.push(curr_node.right);
            }
        }
        curr_node = queue.shift() || null;
    }

    return levelOrderArray;
}
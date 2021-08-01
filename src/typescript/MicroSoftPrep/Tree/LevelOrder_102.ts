import { TreeNode } from "../../lib/Tree/NumberTreeNode";


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

export function levelOrder2(root: TreeNode): number[][] {
    let queue: TreeNode[] = [];
    let childNodes: TreeNode[] = [];
    const levelOrderArray: number[][] = [];
    let curr_node: TreeNode | null = root;
    if (curr_node === null) {
        return [];
    }
    queue.push(curr_node);
    while (queue.length > 0) {
        if (queue.length > 0) {
            levelOrderArray.push(queue.map(v => v.val));
        }
        childNodes = [];

        while (queue.length > 0) {
            curr_node = queue.shift() as TreeNode;
            if (curr_node.left !== null) {
                childNodes.push(curr_node.left);
            }
            if (curr_node?.right !== null) {
                childNodes.push(curr_node.right);
            }
        }
        queue = childNodes;
    }

    return levelOrderArray;
}
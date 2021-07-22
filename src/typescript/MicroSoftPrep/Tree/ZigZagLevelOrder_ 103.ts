import { TreeNode } from "./NumberTreeNode";


export function zigZagLevelOrder(root: TreeNode): number[][] {
    let queue: TreeNode[] = [];
    const zigZagOrder: number[][] = [];
    if (root === null) {
        return []
    }
    queue.push(root)
    let curr_node: TreeNode | null = root;
    let childNodes: TreeNode[] = [];
    let level = 0;
    do {
        childNodes = []
        let i = 0;
        while (queue.length > i) {
            curr_node = queue[i++] as TreeNode;

            if (curr_node.left !== null) {
                childNodes.push(curr_node.left);
            }
            if (curr_node.right !== null) {
                childNodes.push(curr_node.right);
            } 
        }
        zigZagOrder.push((level++%2 ===0 ? queue : queue.reverse()).map(v => v.val));

        queue = childNodes;
    } while (queue.length > 0);

    return zigZagOrder;
}
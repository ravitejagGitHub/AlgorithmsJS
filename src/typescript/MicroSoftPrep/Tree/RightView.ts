import { TreeNode } from "./NumberTreeNode";


export function rightView(root: TreeNode): number[] {
    const rightView: number[] = [];
    let queue: TreeNode[] = [];
    let curr_node;
    let childNodes = []
    if (root !== null) {
        queue.push(root)
    }

    while (queue.length > 0) {
        rightView.push(queue[queue.length - 1].val);
        for (let i = 0; i < queue.length; i++) {
            curr_node = queue[i];
            if (curr_node.left !== null) {
                childNodes.push(curr_node.left);
            }
            if (curr_node.right !== null) {
                childNodes.push(curr_node.right);
            }
        }
        queue = childNodes;
        childNodes = [];
    }
    return rightView;
}
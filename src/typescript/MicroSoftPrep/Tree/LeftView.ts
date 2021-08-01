import { TreeNode } from "../../lib/Tree/NumberTreeNode";


export function leftView(root: TreeNode): number[] {
    const leftView: number[] = [];
    let queue: TreeNode[] = [];
    let childNodes: TreeNode[] = []
    let curr_node = root;
    if (curr_node !== null) {
        queue.push(curr_node);
    }
    while (queue.length > 0) {
        leftView.push(queue[0].val);
        
        childNodes = [];
        for (let i = 0; i < queue.length; i++) {
            curr_node =queue[i]
            if (curr_node.left !== null) {
                childNodes.push(curr_node.left)
            }
            if (curr_node.right !== null) {
                childNodes.push(curr_node.right)
            } 
        }
        queue = childNodes;
    }

    return leftView;
}
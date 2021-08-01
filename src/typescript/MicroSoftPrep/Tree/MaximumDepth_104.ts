import { TreeNode } from "../../lib/Tree";

export  function maxDepth(root: TreeNode | null): number {
    const stack: TreeNode[] = [];
    const depthValues: number[] = [];
    let maxDepth = 0;
    let curr_node = root;
    let cur_depth;
    if (curr_node === null) {
        return 0;
    }
    stack.push(curr_node);
    depthValues.push(1);
    while (stack.length > 0) {
        curr_node = stack.pop() as TreeNode;
        cur_depth = depthValues.pop() as number;
        maxDepth = Math.max(cur_depth, maxDepth);
        if (curr_node.left != null) {
            stack.push(curr_node.left);
            depthValues.push(cur_depth + 1);
        }
        if (curr_node.right != null) {
            stack.push(curr_node.right);
            depthValues.push(cur_depth + 1);
        }

    }
    return maxDepth;
};
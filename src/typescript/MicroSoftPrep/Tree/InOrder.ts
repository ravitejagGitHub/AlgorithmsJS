import { TreeNode as Tree } from "../../lib/Tree";

export class TreeNode extends Tree<number>{

}

export function inOrder(root: TreeNode) {
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
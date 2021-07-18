export class TreeNode<T> {
    private _val: T;
    private _left: any = null;
    private _right: any = null;

    set val(val: T) {
        this._val = val;
    }
    get val(): T {
        return this._val;
    }

    get left(): TreeNode<T> {
        return this._left;
    }
    get right(): TreeNode<T> {
        return this._right;
    }

    constructor(val: T) {
        this._val = val;
    }

    addLeftNode(node: TreeNode<T>) {
        this._left = node;
    }

    addRightNode(node: TreeNode<T>) {
        this._right = node;
    }

    print(): void {
        console.dir(this);
    }

    printNode() {
        console.log(`
        -------------------
        |  ${this._left?._val || 'N'}  |  ${this._val}  |  ${this._right?._val || 'N'}  |
        -------------------     
        `)
    }

};

//-------------------------------- Tree ------------------------------------------
//Tree Traversal -
// /*
//             1
//         /       \
//        2          3
//       / \       / 
//     4     5    6
//         /   \   \
//        8      9   7

// */

export const root = new TreeNode(1);
export const node2 = new TreeNode(2);
export const node3 = new TreeNode(3);
export const node4 = new TreeNode(4);
export const node5 = new TreeNode(5);
export const node6 = new TreeNode(6);
export const node7 = new TreeNode(7);
export const node8 = new TreeNode(8);
export const node9 = new TreeNode(9);

root.addLeftNode(node2);
root.addRightNode(node3);
node2.addLeftNode(node4);
node2.addRightNode(node5);
node3.addLeftNode(node6);
node6.addRightNode(node7);

node5.addLeftNode(node8);
node5.addRightNode(node9);

export const Tree = root;

export function printTree(): void {
    Tree.print();
    node5.print();
    node6.print();
}

export function printGUI() {
    console.log(
        `
               1
            /     \\
           2        3
          / \\      /
        4     5    6
            /   \\   \\
           8     9   7
        `
    )
}
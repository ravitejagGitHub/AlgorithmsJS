
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const insertLevelOrder= function(preOrderArray, root, i) {
    if(i< preOrderArray.length) {
        root = new Node(preOrderArray[i]);
        root.left = insertLevelOrder(preOrderArray, root.left, 2*i+1);
        root.right = insertLevelOrder(preOrderArray, root.right, 2*i+2);
    }
    return root;
}

const preOrder = function(root) {
    if(root!==null) {
        console.log(root.value);
        preOrder(root.left);     
        preOrder(root.right);
    }
}

const inOrder = function(root) {
    if(root!==null) {
        inOrder(root.left);
        console.log(root.value);
        inOrder(root.right);
    }
}

const postOrder = function(root) {
    if(root!==null) {
        postOrder(root.left);
        postOrder(root.right);
        console.log(root.value);
    }
}

function main() {
    let arr = [1,2,3,4,5,6,6,6,6];
    let tree = insertLevelOrder(arr, null, 0, arr.length);
    console.log("Pre Order Traversal:");
    preOrder(tree);
    console.log("In Order Traversal:");
    inOrder(tree);
    console.log("Post Order Traversal:");
    postOrder(tree);
}


class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
const createTree= function(preOrderArray, root, i) {
    if(i< preOrderArray.length) {
        root = new Node(preOrderArray[i]);
        root.left = createTree(preOrderArray, root.left, 2*i+1);
        root.right = createTree(preOrderArray, root.right, 2*i+2);
    }
    return root;
}

/******************/

const countUnivalSubTree = function (root) {
    let { totalCount, isUnival } = helper(root);
    return totalCount;
}

const helper = function (root) {
    if (root === null) {
        return { totalCount: 0, isUnival: true }
    }

    let { totalCount: leftCount, isUnival: isLeftUnival } = helper(root.left);
    let { totalCount: rightCount, isUnival: isRightUnival } = helper(root.right);
    let isUnivalTree = true;

    if(  !isLeftUnival || !isRightUnival) {
        isUnivalTree = false;
    }

    if( root.left!==null && root.value!==root.left.value) {
        isUnivalTree = false;
    }
    if( root.right!==null && root.value!==root.right.value) {
        isUnivalTree = false;
    }
    if(isUnivalTree) {
        return { totalCount: leftCount + rightCount + 1, isUnival: true };
    }

    return { totalCount: leftCount + rightCount, isUnival: false };
}

function testUnivalTree() {
    let arr = [3,3,2,2,2,2,2,2,2];
    let tree = createTree(arr, null, 0);
    let count = countUnivalSubTree(tree);
    console.log(count);
}

testUnivalTree();
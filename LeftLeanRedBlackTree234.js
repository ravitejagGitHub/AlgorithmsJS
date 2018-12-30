const COLOR = {
    RED: true,
    BLACK: false
};

class Node {
    constructor(item) {
        this.item = {
            key: item.key,
            value: item.value
        };
        this.color = COLOR.RED;
        this.left = null;
        this.right = null;
    }
}

class LeftLeanRedBlackTree {
    constructor() {
        this.root = null;
    }

    insert(node) {
        this.root = this.insertNode(this.root, new Node(node));
        this.root.color = COLOR.BLACK;
    }

    insertNode(head, newNode) {

        if (head === null) { //first element set to root
            return newNode;
        }

        if (this.isRed(head.left) && this.isRed(head.right)) { //both childs are red
            this.flipColors(head);
        }

        let compare = this.compareTo(head, newNode);
        if (compare === 0) { // both keys same
            head.value = newNode.value;
        }
        else if (compare > 1) { // newMode < head
            head.left = this.insertNode(head.left, newNode);
        } else { // newMode > head
            head.right = this.insertNode(head.right, newNode);
        }

        if (this.isRed(head.right) && this.isBlack(head.left)) { //left black and righ -red
            head = this.rotateLeft(head);
        }
        if (this.isRed(head.left) && this.isRed(head.left.left)) { //Left R-R  - No path from the root to the bottom contains two consecutive red links.
            head = this.rotateRight(head);
        }

        //No Right R-R where left lean tree all all right nodes 
        return head;
    }


    compareTo(node1, node2) {
        return node1.key - node2.key;
    }

    isRed(head) {
        return !this.isBlack(head);
    }
    isBlack(head) {
        return head === null || head.color === COLOR.BLACK
    }
    flipColors(head) {
        head.color = !head.color;
        head.left.color = !head.left.color;
        head.right.color = !head.right.color;
    }

    rotateLeft(head) {
        let x = head.right;
        head.right = x.left;
        x.left = head;
        x.color = head.color;
        head.color = COLOR.RED;
        return x;
    }

    rotateRight(head) {
        let x = head.left;
        head.left = x.right;
        x.right = head;
        x.color = head.color;
        head.color = COLOR.RED;
        return x;
    }
}


function main() {
    let rbTree = new LeftLeanRedBlackTree();
    for (let i = 1; i <= 5; i++) {
        rbTree.insert({
            key: i,
            value: i
        });
    }
    console.log(rbTree.root);
}

main();

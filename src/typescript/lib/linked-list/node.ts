export class Node {
    val: number;
    next: null | Node;
    constructor(protected value: number){
        this.val = value;
        this.next = null;
    }
  
    addNext(nextNode: Node) {
        this.next = nextNode;
    }
}
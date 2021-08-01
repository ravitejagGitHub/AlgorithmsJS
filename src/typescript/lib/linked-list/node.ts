export class ListNode {
    val: number;
    next: null | ListNode;
    constructor(value: number){
        this.val = value;
        this.next = null;
    }
  
    addNext(nextNode: ListNode) {
        this.next = nextNode;
    }
}
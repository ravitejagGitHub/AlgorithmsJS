/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let fp = head;
    let sp = head;
    
    if(sp.next === null) {
        return sp;
    }
    while( fp!=null && fp.next!==null) {
        sp = sp.next;
        fp = fp.next.next;
    }
    return sp;
};
import { ListNode } from "../../lib/linked-list";
import { reverseList } from "./ReverseLinkedList_206";

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
 function setListValues(head: ListNode | null, list:number[]=[]) {
    if(head!==null) {
        list.push(head.val);
        setListValues(head.next, list)
    }
}

export function isPalindrome2(head: ListNode | null): boolean {
    const list:number[]= []; 
    setListValues(head, list);
    for(let i=0, j=list.length-1; i<j;i++, j--) {
        if(list[i]!==list[j]) {
            return false;
        }
    }
    
    return true;
};

export function isPalindrome(head: ListNode | null): boolean {

    if (head === null || head.next == null) {
        return true;
    }

    let $slow: ListNode | null= head ;
    let $fast: ListNode | null = head;

    while ($slow.next!==null && $fast.next !== null && $fast.next.next !== null) {
        $slow = $slow.next;
        $fast = $fast.next.next;
    }

    let tailNode = reverseList($slow.next);

    while (tailNode != null && head.next) {
        if (head.val !== tailNode.val) {
            return false;
        }
        head = head && head.next;
        tailNode = tailNode.next;
    }
    
    return true;
};
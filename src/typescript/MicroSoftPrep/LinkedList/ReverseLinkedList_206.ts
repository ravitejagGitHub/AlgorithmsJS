import { ListNode } from "../../lib/linked-list";

export function reverseList(head: ListNode | null, prevNode: ListNode| null = null): ListNode | null {
    if (head === null) {
        return prevNode;
    }
    let nextNode = head.next;
    head.next = prevNode;
    prevNode = head;
    return reverseList(nextNode, prevNode);
};
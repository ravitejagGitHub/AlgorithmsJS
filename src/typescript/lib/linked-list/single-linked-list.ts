import { ListNode } from "./node";


export const createSingleLinkedList = function(arr:  number[], head: null | ListNode = null, i = 0) {
  if (i < arr.length) {
    head = new ListNode(arr[i]);
    head.next = createSingleLinkedList(arr, head.next, ++i);
  }
  return head;
};

export const print = function(node: ListNode | null, output: number[] = []) {
  if (node !== null) {
    output.push(node.val);
    if (node.next) {
      print(node.next, output);
    } else {
      console.log(output.join("->"));
    }
  }
  
  return output.join("->");
};

export class LinkedList {
  datalist: null | ListNode;
  constructor(arr: number[]) {
    this.datalist = createSingleLinkedList(arr);
  }

  list() : ListNode | null {
    return this.datalist;
  }

  print() {
    console.log(print(this.datalist));
  }

  lastNode(): ListNode | null {
    let n = this.datalist;
    while (n!= null && n.next !== null) {
      n = n.next;
    }
    return n;
  }

  head(): ListNode | null {
    return this.datalist;
  }
}

import { Node } from "./node";


export const createSingleLinkedList = function(arr:  number[], head: null | Node = null, i = 0) {
  if (i < arr.length) {
    head = new Node(arr[i]);
    head.next = createSingleLinkedList(arr, head.next, ++i);
  }
  return head;
};

const print = function(node: Node | null, output: number[] = []) {
  if (node !== null) {
    output.push(node.val);
    if (node.next) {
      print(node.next, output);
    }
  }
  return output.join("->");
};

export class LinkedList {
  datalist: null | Node;
  constructor(arr: number[]) {
    this.datalist = createSingleLinkedList(arr);
  }

  list() : Node | null {
    return this.datalist;
  }

  print() {
    console.log(print(this.datalist));
  }

  lastNode(): Node | null {
    let n = this.datalist;
    while (n!= null && n.next !== null) {
      n = n.next;
    }
    return n;
  }
}

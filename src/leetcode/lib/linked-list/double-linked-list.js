const Node = require("./node");

const createDoubleLinkedList = function(
  arr,
  head = null,
  i = 0,
  prevNode = null
) {
  if (i < arr.length) {
    head = new Node(arr[i], true);
    head.prev = prevNode;
    head.next = createDoubleLinkedList(arr, head.next, ++i, head);
    trail = head.next;
  }
  return head;
};

const print = function(node, output = []) {
  if (node !== null) {
    output.push(node.value);
    if (node.next) {
      print(node.next, output);
    }
  }
  return output.join("<=>");
};

const printReverse = function(node, output = []) {
  if (node !== null) {
    output.push(node.value);
    if (node.prev) {
      printReverse(node.prev, output);
    }
  }
  return output.join("<=>");
};

class LinkedList {
  constructor(arr) {
    this.datalist = createDoubleLinkedList(arr);
  }

  list() {
    return this.datalist;
  }

  print(order = "asc") {
    if (order === "desc") {
      let trail = this.datalist;
      while (trail.next !== null) {
        trail = trail.next;
      }
      console.log(printReverse(trail));
    } else {
      console.log(print(this.datalist));
    }    
  }
}
module.exports = LinkedList;

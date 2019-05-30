const Node = require("./node");

const createSingleLinkedList = function(arr, head = null, i = 0) {
  if (i < arr.length) {
    head = new Node(arr[i]);
    head.next = createSingleLinkedList(arr, head.next, ++i);
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
  return output.join("->");
};

class LinkedList {
  constructor(arr) {
    this.datalist = createSingleLinkedList(arr);
  }

  list() {
    return this.datalist;
  }

  print() {
    console.log(print(this.datalist));
  }
}
module.exports = LinkedList;

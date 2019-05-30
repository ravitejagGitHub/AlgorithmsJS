const Node = require("./node");

const createDoubleLinkedList = function(arr, head = null, i = 0, prevNode = null) {
  if (i < arr.length) {
    head = new Node(arr[i],true);
    head.prev = prevNode;
    head.next = createDoubleLinkedList(arr, head.next, ++i, head);
    trail = head.next;
  }
  return head;
};

module.exports = createDoubleLinkedList;

const Node = require("./node");

const createSingleLinkedList = function(arr, head = null, i = 0) {
  if (i < arr.length) {
    head = new Node(arr[i]);
    head.next = createSingleLinkedList(arr, head.next, ++i);
  }
  return head;
};

module.exports = createSingleLinkedList;

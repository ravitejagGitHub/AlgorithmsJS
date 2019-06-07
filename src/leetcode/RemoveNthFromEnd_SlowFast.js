const Node = require("./lib/linked-list/node");

const removeNthFromEnd = function(head, n) {
  let fastPointer = head;

  while (n-- && fastPointer !== null) {
    fastPointer = fastPointer.next;
  }

  let slowPointer = new Node(null);
  slowPointer.next = head;

  while (fastPointer !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }

  if (n < 0) {
    let targetNode = slowPointer.next;
    if (targetNode === head) {
      //head node
      head = head.next;
    } else if (targetNode !== null && targetNode.next === null) {
      //last node
      slowPointer.next = null;
    } else if (targetNode !== null && targetNode.next !== null) {
      //middle node
      slowPointer.next = targetNode.next;
    }

    if (targetNode !== null) {
      delete targetNode;
    }
  }
  return head;
};

module.exports = removeNthFromEnd;

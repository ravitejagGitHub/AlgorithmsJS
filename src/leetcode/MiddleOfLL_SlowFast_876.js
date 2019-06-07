const Node = require("./lib/linked-list/node");

const middleNode = function(head) {
  let fastPointer = (slowPointer = head);

  if (head === null) {
    //empty
    return null;
  }
  if (head.next === null) {
    //one node
    return head;
  }

  while (fastPointer !== null && fastPointer.next !== null) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }

  return slowPointer;
};

module.exports = middleNode;

const Node = require("./lib/linked-list/node");

const removeNthFromEnd = function(head, n) {
  let temp = head;
  let prevNode = null,
    totalNodes = 0;

  while (temp !== null) {
    totalNodes++;
    temp = temp.next;
  }
  temp = head;
  n = totalNodes - n;
  while (n > 0) {
    prevNode = temp;
    temp = temp.next;
    n--;
  }
  if (n === 0) {
    if (temp === head) {
      head = head.next;
    } else if (temp === null && prevNode !== null) {
      prevNode.next = null;
    } else if (prevNode !== null && temp !== null) {
      prevNode.next = temp.next;
    }
    if (temp !== null) {
      delete temp;
    }
  }
  
  return head;
};

module.exports = removeNthFromEnd;

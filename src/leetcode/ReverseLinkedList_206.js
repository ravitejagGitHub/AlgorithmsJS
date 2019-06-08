const reverseList = function(head, prevNode = null) {
  if (head === null) {
    return prevNode;
  }
  let nextNode = head.next;
  head.next = prevNode;
  return reverseList(nextNode, head);
};

module.exports = reverseList;

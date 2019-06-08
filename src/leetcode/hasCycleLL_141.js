const hasCycle = function(head) {
  if (head === null) {
    return false;
  }

  let slowPointer = (fastPointer = head);
  while (fastPointer.next !== null && fastPointer.next.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
    if(slowPointer === fastPointer) {
        return true;
    }
  }
  return false;
};

module.exports = hasCycle;

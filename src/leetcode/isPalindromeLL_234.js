const revereseLL = require("./ReverseLinkedList_206");

/**
 * @param {Node} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
  let slowPointer = (fastPointer = head);
  if (head === null || head.next === null) {
    return true;
  }

  while (fastPointer.next !== null && fastPointer.next.next !== null) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }
  let tailNode = revereseLL(slowPointer.next);

  while (tailNode !== null) {
    if (head.value !== tailNode.value) {
      return false;
    }
    head = head.next;
    tailNode = tailNode.next;
  }

  return true;
};

module.exports = isPalindrome;

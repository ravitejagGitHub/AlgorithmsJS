/**
 * @param {Node} l1
 * @param {Node} l2
 * @return {Node}
 */
const mergeTwoLists = function(l1, l2) {
  if (l1 === null) {
    return l2;
  }

  if (l2 === null) {
    return l1;
  }

  if (l1.value < l2.value) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l2.next, l1);
    return l2;
  }
};

module.exports = mergeTwoLists;

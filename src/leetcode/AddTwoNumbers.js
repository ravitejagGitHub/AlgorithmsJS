const Node = require("./lib/linked-list/node");

const AddTwoNumbers = function(l1, l2, carry = 0) {
  let node = null;
  if (l1 || l2) {
    const val1 = l1 ? l1.value : 0;
    const val2 = l2 ? l2.value : 0;
    const sum = val1 + val2 + carry;
    node = new Node(sum % 10);
    node.next = AddTwoNumbers(l1? l1.next : null, l2? l2.next : null, sum >= 10 ? 1 : 0);
  } else if(carry) {
    node = new Node(1);
  }
  return node;
};

module.exports = AddTwoNumbers;

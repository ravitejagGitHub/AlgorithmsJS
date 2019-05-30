// const twoSum = require("./leetcode/2Sum");
// console.log(twoSum([2,4,6,3,7,18],8));

// const SLL = require("./leetcode/lib/linked-list/single-linked-list");
// let sll = new SLL([1,2,3,4,5,6]);
// let sl2 = new SLL([10,20,30,40,50,60]);
// console.log(sll.print());
// console.log(sl2.print());

const DLL = require("./leetcode/lib/linked-list/double-linked-list");
let dll1 = new DLL([1,2,3,4,5,6]);
let dll2 = new DLL([11,21,31,41,51,61]);
console.log(dll1.print('desc'));
console.log(dll2.print());


// const addTwoNumbers = require("./leetcode/AddTwoNumbers");
// const SLL = require("./leetcode/lib/linked-list/single-linked-list");
//  let l1 = SLL([2,4,3]);
//  let l2 = SLL([5,6]);

//  console.log(addTwoNumbers(l1,l2));
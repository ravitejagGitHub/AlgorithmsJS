// const twoSum = require("./leetcode/2Sum");
// console.log(twoSum([2,4,6,3,7,18],8));

//const SLL = require("./leetcode/linked-list/single-linked-list");
// let sll = SLL([1,2,3,4,5,6]);
// console.log(sll);

// const DLL = require("./leetcode/lib/linked-list/double-linked-list");
// let dll = DLL([1,2,3,4,5,6]);
// console.log(dll);


const addTwoNumbers = require("./leetcode/AddTwoNumbers");
const SLL = require("./leetcode/lib/linked-list/single-linked-list");
 let l1 = SLL([2,4,3]);
 let l2 = SLL([5,6,4]);

 console.log(addTwoNumbers(l1,l2));
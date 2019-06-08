// const twoSum = require("./leetcode/2Sum");
// console.log(twoSum([2,4,6,3,7,18],8));

// const SLL = require("./leetcode/lib/linked-list/single-linked-list");
// let sll = new SLL([1,2,3,4,5,6]);
// let sl2 = new SLL([10,20,30,40,50,60]);
// console.log(sll.print());
// console.log(sl2.print());

// const DLL = require("./leetcode/lib/linked-list/double-linked-list");
// let dll1 = new DLL([1,2,3,4,5,6]);
// let dll2 = new DLL([11,21,31,41,51,61]);
// console.log(dll1.print('desc'));
// console.log(dll2.print());


// const addTwoNumbers = require("./leetcode/AddTwoNumbers");
// const SLL = require("./leetcode/lib/linked-list/single-linked-list");
//  let l1 = SLL([2,4,3]);
//  let l2 = SLL([5,6]);

//  console.log(addTwoNumbers(l1,l2));

// const longestUniqueSubString = require("./leetcode/longestSubstring");

// let substr = longestUniqueSubString("GEEKSFORGEEKS");
// console.log(substr);
// substr = longestUniqueSubString("ABDEFGABEF");
// console.log(substr);
// substr = longestUniqueSubString("ABCADAEFGH");
// console.log(substr);
// substr = longestUniqueSubString("ABCABCDA");
// console.log(substr);

// substr = longestUniqueSubString("abcabcbb");
// console.log(substr);

// substr = longestUniqueSubString("abcdebafdgh");
// console.log(substr);

// const quickSort = require("./leetcode/quicksort");
// var a = [2,56,12,34,21,56,78,98,98,32,45,77]
// quickSort(a);
// console.log(a)

// const SLL = require("./leetcode/lib/linked-list/single-linked-list");
// //const removeNthFromEnd = require("./leetcode/RemoveNthFromEnd_19");
//  const removeNthFromEnd = require("./leetcode/RemoveNthFromEnd_SlowFast");
// let sll = new SLL([1,2,3,4,5]);
// sll.print();
// sll.datalist = removeNthFromEnd(sll.datalist, 2);
// sll.print();



// const SLL = require("./leetcode/lib/linked-list/single-linked-list");
// const middleNode = require("./leetcode/MiddleOfLL_SlowFast_876");
// let sll = new SLL([1,2,3,4,5,6,7,8,9]);
// sll.print();
// let node = middleNode(sll.datalist);
// console.log(node);

// const SLL = require("./leetcode/lib/linked-list/single-linked-list");
// const reverseLinkedList = require("./leetcode/ReverseLinkedList_206");
// let sll = new SLL([1,2]);
// sll.print();
// sll.datalist = reverseLinkedList(sll.datalist);
// sll.print();


// const SLL = require("./leetcode/lib/linked-list/single-linked-list");
// const hasCycleLL = require("./leetcode/hasCycleLL_141");
// let sll = new SLL([1,2,3,4,5,6,7]);
// let lastNode = sll.lastNode();
//     lastNode.next = sll.datalist.next.next.next;
// let hasCycle = hasCycleLL(sll.datalist);
// console.log(hasCycle)

// const plusOne = require("./leetcode/PlusOne_66");
// let result = plusOne([2,9,9]);
// console.log(result);

// const SLL = require("./leetcode/lib/linked-list/single-linked-list");
// let sl1 = new SLL([1,5,10,15,20,25]);
// let sl2 = new SLL([2,4,9,20]);
// sl1.print();
// sl2.print();
// const mergetTwoLists = require("./leetcode/MergeTwoList_21");
// sl1.datalist = mergetTwoLists(sl1.datalist, sl2.datalist);
// sl1.print();

const Graph  = require("./leetcode/lib/graph/Graph");
let g =  new Graph(6);

var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]; 
  
// adding vertices 
for (var i = 0; i < vertices.length; i++) { 
    g.addVertex(vertices[i]); 
} 
  
// adding edges 
g.addEdge('A', 'B'); 
g.addEdge('A', 'D'); 
g.addEdge('A', 'E'); 
g.addEdge('B', 'C'); 
g.addEdge('D', 'E'); 
g.addEdge('E', 'F'); 
g.addEdge('E', 'C'); 
g.addEdge('C', 'F'); 
  
// prints all vertex and  its adjacency list
g.printGraph();
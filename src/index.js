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

// const Graph  = require("./leetcode/lib/graph/Graph");
// let g =  new Graph(6);//directed graph

// var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
// // adding vertices
// for (var i = 0; i < vertices.length; i++) {
//     g.addVertex(vertices[i]);
// }
// // adding edges
// g.addEdge('A', 'B');
// g.addEdge('A', 'D');
// g.addEdge('A', 'E');
// g.addEdge('B', 'C');
// g.addEdge('D', 'E');
// g.addEdge('E', 'F');
// g.addEdge('E', 'C');
// g.addEdge('C', 'F');

// // prints all vertex and  its adjacency list
// g.printGraph();

// g =  new Graph(6, true); //undirected graph

// var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
// // adding vertices
// for (var i = 0; i < vertices.length; i++) {
//     g.addVertex(vertices[i]);
// }
// // adding edges
// g.addEdge('A', 'B');
// g.addEdge('A', 'D');
// g.addEdge('A', 'E');
// g.addEdge('B', 'C');
// g.addEdge('D', 'E');
// g.addEdge('E', 'F');
// g.addEdge('E', 'C');
// g.addEdge('C', 'F');

// // prints all vertex and  its adjacency list
// g.printGraph();
// console.log(g.getAdjecentVertices(vertices[0]));
// console.log(g.getAllVertices());

// const Graph = require("./leetcode/lib/graph/Graph");
// let g = new Graph(6); //directed graph

// var vertices = ["A", "B", "C", "D", "E", "F", "G"];
// // adding vertices
// for (var i = 0; i < vertices.length; i++) {
//   g.addVertex(vertices[i]);
// }
// // adding edges
// g.addEdge("A", "C");
// g.addEdge("B", "C");
// g.addEdge("B", "E");
// g.addEdge("C", "D");
// g.addEdge("E", "F");
// g.addEdge("D", "F");
// g.addEdge("F", "G");

// // prints all vertex and  its adjacency list
// g.printGraph();

// const topologicalSort = require("./leetcode/topologicalSort");
// console.log(topologicalSort(g));

// //test 22
// g = new Graph(8); //directed graph

// var vertices = [5, 7, 3, 11, 8, 2, 9, 10];
// // adding vertices
// for (var i = 0; i < vertices.length; i++) {
//   g.addVertex(vertices[i]);
// }
// // adding edges
// g.addEdge(5,11);
// g.addEdge(7,11);
// g.addEdge(7, 8);
// g.addEdge(3,8);
// g.addEdge(3,10);
// g.addEdge(11,9);
// g.addEdge(11,2);
// g.addEdge(11,10);
// g.addEdge(8,9);

// // prints all vertex and  its adjacency list
// g.printGraph();

// console.log(topologicalSort(g).join("->"));

// const groupAnagrams = require("./leetcode/GroupAnangram");
// let result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
// console.log(result);


// const LargestNumber = require("./leetcode/LargestNumberFormedFromArrayElements");
// console.log(LargestNumber(["98", "95", "889", "99996", "9","99","991"]));

// const SLL = require("./leetcode/lib/linked-list/single-linked-list");
// const isPalindrome =  require("./leetcode/isPalindromeLL_234");
// let sll = new SLL([2]);
// console.log(sll.print());
// let isP = isPalindrome(sll.datalist);
// console.log(isP);

//-------------------------------- Tree ------------------------------------------
//Tree Traversal - 
const TreeNode = require("./leetcode/lib/Tree/TreeNode");
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right = new TreeNode(3);
root.right.left = new TreeNode(6);

//Pre Order.
// const InOrder = require("./leetcode/TreeTraversalsInOrder_94");
// let order = InOrder.inorderTraversal(root);
// console.log(order.join("->"));
// order = InOrder.inOrderRecursive(root);
// console.log(order.join("->"));


// //InOrder
// const PreOrder = require("./leetcode/TreeTraversalsPreOrder_144");
// let order = PreOrder.preOrderTraversal(root);
// console.log(order.join("->"));
// order = PreOrder.preOrderRecursive(root);
// console.log(order.join("->"));


//postOrder
const PostOrder = require("./leetcode/TreeTraversalsPostOrder_145");
let order = PostOrder.postOrderTraversal(root);
console.log(order.join("->"));
order = PostOrder.postOrderRecursive(root);
console.log(order.join("->"));
order = PostOrder.postOrderUsingWithQueue(root);
console.log(order.join("->"));
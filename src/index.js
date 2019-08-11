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
// /*
//             1
//         /       \
//        2          3
//       / \       / 
//     4     5    6
//         /   \   \
//        8      9   7

// */
// const TreeNode = require("./leetcode/lib/Tree/TreeNode");
// let root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);
// root.left.right.left = new TreeNode(8);
// root.left.right.right = new TreeNode(9);
// root.right = new TreeNode(3);
// root.right.left = new TreeNode(6);
// root.right.left.right = new TreeNode(7);

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
// const PostOrder = require("./leetcode/TreeTraversalsPostOrder_145");
// let order = PostOrder.postOrderTraversal(root);
// console.log(order.join("->"));
// order = PostOrder.postOrderRecursive(root);
// console.log(order.join("->"));
// order = PostOrder.postOrderUsingWithQueue(root);
// console.log(order.join("->"));

//level order
// const LevelOrder = require("./leetcode/TreeTraversalLevelOrder_102");
// let order = LevelOrder(root);
// console.log(order);

//zig zag level order
// const zigZagLevelOrder = require("./leetcode/TreeTraversalZigZagOrder_103");
// let order = zigZagLevelOrder(root);
// console.log(order);

// Max Depth
// const maxDepth = require("./leetcode/TreeMaxDepth_104");
// console.log(`Max Depth : ${maxDepth.maxDepthRecurrsive(root)}`);
// console.log(`Max Depth : ${maxDepth.maxDepthIterative(root)}`);

// Min Depth
// const minDepth = require("./leetcode/TreeMinDepth_111");
// console.log(`Min Depth : ${minDepth.minDepthRecurrsive(root)}`);
// console.log(`Min Depth : ${minDepth.minDepthIterative(root)}`);

//Same Tree
// const isSameTree = require("./leetcode/SameTree_100");
// console.log(`Is Same Tree : ${isSameTree(root, root)}`);

// //Sub Tree
// const isSubTree = require("./leetcode/SubTree_572");
// console.log(`Is Sub Tree : ${isSubTree(root, root)}`);

//Symetric Tree

// root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);
// root.right = new TreeNode(2);
// root.right.left = new TreeNode(5);
// root.right.right = new TreeNode(4);

// const isSymetricTree = require("./leetcode/TreeSymmetric_101");
// console.log(`Is Symetric Tree : ${isSymetricTree(root)}`);
// const ClimbingStairs =  require("./leetcode/DynamicProgram/ClimbingStairs_70");
// console.log(ClimbingStairs.climbStairs_DP(45));
// console.log(ClimbingStairs.climbStairs(2));

// const maximumSwap =  require("./leetcode/maximumSwap_670");
// console.log(maximumSwap(98368));

// const PopulatingNextLevelChild =  require("./leetcode/PopulatingNextLevelChild_116");
// let r = PopulatingNextLevelChild(root);
// console.table(r);

// const MinimumSlidingWindowSubstring = require("./leetcode/MinimumSlidingWindowSubstring_76");
// console.log(MinimumSlidingWindowSubstring("ADOBECODEBANC", "ABC"));

// const lowestCommonAncestor = require("./leetcode/TreeLowestCommonAncestor_236");
// console.log(lowestCommonAncestor(root,root.left.left,root.left.right.right).val); //1,4,9
// console.log(lowestCommonAncestor(root,root.left.right.left,root.right.left).val); //1,8,6

// const rotate = require("./leetcode/RotateImage_48");
// let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.table(matrix);
// console.table(rotate(matrix));

// matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
// console.table(matrix);
// console.table(rotate(matrix));

// const reverseString = require("./leetcode/ReverseString");
// console.log(reverseString("raviteja giduturi"));

// const FindPairsWithEqualSum = require("./leetcode/FindPairsWithEqualSum");
// console.log(FindPairsWithEqualSum([9, 4, 3, 1, 7, 12]));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/**
 * http://thatjsdude.com/interview/js1.html
 */

//  const isPrime = require("./jsAlgorithms/isPrime");
//  console.log(isPrime(166));

//  const primefactors = require("./jsAlgorithms/primeFactors");
//  console.log(primefactors(16678));

// const fibonacci = require("./jsAlgorithms/fibonacci");
//  console.log(fibonacci(124));

// const greatestCommonDivision = require("./jsAlgorithms/greatestCommonDivision");
//  console.log(greatestCommonDivision(14, 21));
//  console.log(greatestCommonDivision(69, 169));

// const removeDumplicates = require("./jsAlgorithms/removeDumplicates");
// console.log(removeDumplicates([1,3,3,3,1,5,6,7,8,1]));

// const merge2SortedArrays = require("./jsAlgorithms/merge2SortedArrays");
// console.log(
//   merge2SortedArrays(
//     [2, 5, 6, 9, 11, 45, 60, 70, 80, 90, 123],
//     [1, 2, 3, 29, 32, 38, 40]
//   )
// );

// const swap2nums = require("./jsAlgorithms/swap2nums");
// swap2nums();

// const strReverse = require("./jsAlgorithms/string-reverse");
// console.log(strReverse("this is the string."));

// const countzeros = require("./jsAlgorithms/count-zeros");
// console.log(countzeros(3000));

// const substring = require("./jsAlgorithms/substring");
// console.log(substring("raviteja", "teja"));
// console.log(substring("abbcdabbbbbck", "ab"));
// console.log(substring("abbcdabbbbbck", "bck"));
// console.log(substring("raviteja", "teja"));


// const lcs = require("./leetcode/DynamicProgram/LongestCommonSubstring");
// lcs("ABCBDDAF","ACBDF");

// const lcs = require("./leetcode/DynamicProgram/longestCommonSubsequence_1143");
// lcs("ABCDAF","ACBDF");


// const editDistance = require("./leetcode/DynamicProgram/EditDistance_72");
// editDistance("intention","execution");

// const zigZagArray = require("./leetcode/zigZagArray_1144");
// zigZagArray([9,6,1,6,2]);
// zigZagArray([2,1,2]);


// var SnapshotArray = require("./leetcode/SnapshotArray__1146");
// var obj =  new SnapshotArray(3);
// obj.set(0,2);
// console.log(obj.snap());
// obj.set(0,22);
// console.log(obj.snap());
// obj.set(0,333);
// console.log(obj.get(0,1));
// console.log(obj.get(0,2));
// console.log(obj.get(0,0));

//BTree color GameWinning
/*
            1
        /       \
       2          3
      / \        
    4     5   

*/
// const TreeNode = require("./leetcode/lib/Tree/TreeNode");
// let root = new TreeNode(6);
// root.left = new TreeNode(3);
// root.left.left = new TreeNode(7);
// root.left.right = new TreeNode(4);
// root.left.right.right = new TreeNode(2);
// root.left.right.right.right = new TreeNode(1);
// root.left.right.right.right.right = new TreeNode(5);

// const btreeColorGameWinning = require("./leetcode/BTreeColorGameWinningMove_1145");
// console.log(btreeColorGameWinning(root, 7, 3));

let SuperUglyNumber = require("./leetcode/SuperUglyNumber_313");
console.log(SuperUglyNumber(12, [2,3,5]));
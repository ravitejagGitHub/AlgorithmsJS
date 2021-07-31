import { LinkedList, print } from "./lib/linked-list";
import { printGUI, printTree, Tree } from "./lib/Tree";
import { twoSum } from "./MicroSoftPrep/2Sum_1";
import { maxSubArray } from "./MicroSoftPrep/Arrays/MaximumSubarray_56";
import { mergeSortedArray } from "./MicroSoftPrep/Arrays/MergeSortedArrays";
import { removeDuplicates } from "./MicroSoftPrep/Arrays/RemoveDuplicatesfromSortedArray_26";
import { subarraySum } from "./MicroSoftPrep/Arrays/SubarraySumEqualsK_560";
import { findDuplicate } from "./MicroSoftPrep/FindDuplicateNumber_287";
import { mergeTwoLists } from "./MicroSoftPrep/LinkedList/MergeSortedList_21";
import { lengthOfLongestSubstring } from "./MicroSoftPrep/strings/LongSubString_3";
import { reversString, reversString2 } from "./MicroSoftPrep/strings/revers";
import { isValid } from "./MicroSoftPrep/strings/ValidParentheses_20";
import {  inorderTraversal, levelOrder, levelOrder2, postOrder, preOrder, zigZagLevelOrder } from "./MicroSoftPrep/Tree";
import { leftView } from "./MicroSoftPrep/Tree/LeftView";
import { rightView } from "./MicroSoftPrep/Tree/RightView";

// console.log(rightView(Tree));

//console.log(reversString2("ravi teja"))

//console.log(lengthOfLongestSubstring("abcabcbb"));
//console.log(findDuplicate([3,1,3,4,2]));

// console.log(mergeSortedArray([1,4,6,7,12,18,30],[2,3,5,6,8,14,19]));

// let l1 = new LinkedList([1, 2, 3])
// let l2 = new LinkedList([11, 12, 13])
// print(mergeTwoLists(l1.head(), l2.head()));

// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

printGUI();
console.log(inorderTraversal(Tree))
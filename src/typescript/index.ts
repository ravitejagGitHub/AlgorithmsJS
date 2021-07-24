import { printGUI, Tree } from "./lib/Tree";
import { inOrder, levelOrder, levelOrder2, postOrder, preOrder, zigZagLevelOrder } from "./MicroSoftPrep/Tree";
import { leftView } from "./MicroSoftPrep/Tree/LeftView";
import { rightView } from "./MicroSoftPrep/Tree/RightView";
printGUI()
console.log(rightView(Tree));

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    
    if(root.val === x || root.val === y ) {
        return false;
    }
    const findValue = function(curr, target, parent, height) {
        if(!curr) {
            return null;
        }
        if(curr.val === target) {
            return [parent, height];
        } 
        
        parent = curr.val;
        
        return  findValue(curr.left, target, parent, height+1) || findValue(curr.right, target, parent, height+1);
        
    };
    
    let xPos = findValue(root,x,-1, 0);
    let yPos = findValue(root,y,-1, 0);

    return xPos && yPos && xPos[0] !== yPos[0]  && xPos[1] === yPos[1];
    
};



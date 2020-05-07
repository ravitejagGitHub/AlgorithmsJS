/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];  
    this.minStack = [];
  };
  
  /** 
   * @param {number} x
   * @return {void}
   */
  MinStack.prototype.push = function(x) {
      this.stack.push(x);
      if(this.stack.length === 1) {
          this.minStack.push(x);
      } else {
         this.minStack.push(Math.min(x, this.getMin()))
      }   
  };
  
  /**
   * @return {void}
   */
  MinStack.prototype.pop = function() {
      this.stack.pop();
      this.minStack.pop();
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.top = function() {
      return this.stack[this.stack.length-1];
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.getMin = function() {
      return this.minStack[this.minStack.length-1];
  };
  
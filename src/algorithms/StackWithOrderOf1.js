class Stack {
    constructor() {
        this.stack = [];
        this.minStack = [];
        this.maxStack = [];
    }

    push(ele) {
        this.stack.push(ele);
        if (this.stack.length === 1) {
            this.minStack.push(ele);
            this.maxStack.push(ele);
            return;
        }
        if (ele < this.minStack[this.minStack.length-1]) {
            this.minStack.push(ele);
        } else {
            this.minStack.push(this.minStack[this.minStack.length-1]);
        }

        if (ele > this.maxStack[this.maxStack.length-1]) {
            this.maxStack.push(ele);
        } else {
            this.maxStack.push(this.maxStack[this.maxStack.length-1]);
        }
    }

    pop() {
        this.stack.pop();
        this.minStack.pop();
        this.maxStack.pop();
    }

    getMin(){
        return this.minStack[this.minStack.length-1];
    }

    getMax(){
        return this.maxStack[this.maxStack.length-1];
    }
}

var stack = new Stack();
stack.push(8);
stack.push(4);
stack.push(7);
stack.push(10);
stack.push(3);
stack.push(9);
stack.push(2);


console.log(stack.stack);
console.log(stack.minStack);
console.log(stack.maxStack);
console.log(stack.getMin());
console.log(stack.getMax());
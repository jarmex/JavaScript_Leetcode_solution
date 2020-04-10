/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.

Hint:
Consider each node in the stack having a minimum value. (Credits to @aakarshmadhavan)
*/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.items = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.items.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.items.length > 0) {
    this.items.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.items[this.items.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.items.length < 1) return 0;
  if (this.items.length === 1) return this.items[0];
  return this.items.reduce((acc, item) => {
    return Math.min(acc, item);
  }, Number.MAX_VALUE);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// var obj = new MinStack();
// obj.push(-2);
// obj.push(0);
// obj.push(-3);
// console.log(obj.getMin());
// obj.pop();
// console.log(obj.top());
// var param_4 = obj.getMin();
// console.log(param_4);

//["MinStack","push","push","push","push","getMin","pop","getMin","pop","getMin","pop","getMin"]
//[[],[2],[0],[3],[0],[],[],[],[],[],[],[]]

let k = new MinStack();
k.push(2);
k.push(0);
k.push(3);
k.push(0);
console.log(k.getMin());
k.pop();
console.log(k.getMin());
k.pop();
console.log(k.getMin());
k.pop();
console.log(k.getMin());
//[null,null,null,null,null,0,null,0,null,0,null,2]

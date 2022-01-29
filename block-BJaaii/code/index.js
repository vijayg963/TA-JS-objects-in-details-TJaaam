// ![Queue](../assets/queue.gif)

// 1. Create a class name `Stack` with the following data and methods. Also implement a `length` getter method.

// Data:

// - `stack`

// Methods:

// - `push`: will accept a value and add to the stack. Stack adds data at the end
// - `pop`: will delete the last element (max index) of the stack
// - `peek`: can accept and optional parameter. Will display the element at the given index(passed as argument). If nothing is passed display the last element (last index)
// - `reverse`: will reverse all the elements of the stack and return the reversed stack
// - `isEmpty`: returns `true` if the stack is empty and `false` if the stack has any data.
// - `displayStack`: returns all the data in stack in string format

// Getter

// - `length`: returns the current length of the stack.

class Stack {
  constructor() {
    this.stack = [];
  }
  push(data) {
    this.stack.push(data);
    return this.stack;
  }
  pop() {
    this.stack.pop();
    return this.stack;
  }
  peak(i = this.length - 1) {
    return this.stack[i];
  }
  reverse() {
    return this.stack.reverse();
  }
  isEmpty() {
    return !(this.stack.length > 0);
  }
  displayStack() {
    return this.stack.join(" ");
  }
  get length() {
    return this.stack.length;
  }
}

// Test
let myStack = new Stack();
myStack.push("One");
myStack.push("Two");
console.log(myStack.length); // 2
console.log(myStack.peek()); // "Two"
console.log(myStack.peek(0)); // "One"
console.log(myStack.reverse()); // ['Two', 'One']
console.log(myStack.displayStack()); // 'Two One'
myStack.pop();
console.log(myStack.length); // 1
console.log(myStack.peek()); // 'Two'
console.log(myStack.isEmpty()); // false
myStack.pop();
console.log(myStack.isEmpty()); // true

// 2. Create a class name `Queue` with the following data and methods. Also implement a `length` getter method.

// Data:

// - `queue`

// Methods:

// - `enqueue`(item): Adds the item at the end of the queue
// - `dequeue`: Removes an item from the top of the queue
// - `peek`: can accept and optional parameter. Will display the element at the given index(passed as argument). If nothing is passed display the first element from top (index 0)
// - `isEmpty`: returns `true` if the stack is empty and `false` if the stack has any data.
// - `displayQueue`: returns all the data in stack in string format

// Getter

// - `length`: returns the current length of the stack.

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(data) {
    this.queue.push(data);
    return this.queue;
  }
  dequeue() {
    this.queue.splice(0, 1);
    return this.queue;
  }
  peak(i = 0) {
    return this.queue[i];
  }
  reverse() {
    return this.queue.reverse();
  }
  isEmpty() {
    return !(this.queue.length > 0);
  }
  displayqueue() {
    return this.queue.join(" ");
  }
  get length() {
    return this.queue.length;
  }
}

// Test
let atmQueue = new Queue();
atmQueue.enqueue("Aman");
atmQueue.enqueue("John");
atmQueue.enqueue("Rohan");
console.log(atmQueue.displayQueue()); // "Aman John Rohan"
console.log(atmQueue.length); // 3
console.log(atmQueue.peek()); // "Aman"
console.log(atmQueue.peek(1)); // "John"
atmQueue.dequeue();
console.log(atmQueue.length); // 2
console.log(atmQueue.peek()); // 'John'
console.log(atmQueue.isEmpty()); // false
atmQueue.dequeue();
atmQueue.dequeue();
console.log(atmQueue.isEmpty()); // true

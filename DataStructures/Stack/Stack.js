/**
 * 栈(Stack):
 */
class MyStack {
  constructor() {
    this.stack = [];
    this.top = 0;
    this.min = null;
  }

  get length() {
    return this.pop;
  }
  get isEmpty() {
    return this.top === 0;
  }

  push(data) {
    this.stack.push(data);
    if (!this.min) {
      this.min = data;
    } else {
      this.min = Math.min(this.min, data);
    }
    this.top += 1;
    return this.top;
  }

  pop() {
    if (this.isEmpty) {
      throw Error("Stack is empty");
    }
    this.top -= 1;
    const value = this.stack.pop();
    this.min = Math.min(this.min, ...this.stack);
    return value;
  }
}

const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);

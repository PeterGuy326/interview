class MyQueue {
  constructor() {
      this.stack1 = []; // 用于入队的栈
      this.stack2 = []; // 用于出队的栈
  }

  // 入队操作
  push(x) {
      this.stack1.push(x);
  }

  // 出队操作
  pop() {
      if (this.stack2.length === 0) {
          // 如果栈 2 为空，将栈 1 的元素全部转移到栈 2 中
          while (this.stack1.length > 0) {
              this.stack2.push(this.stack1.pop());
          }
      }
      return this.stack2.pop(); // 从栈 2 中弹出元素
  }

  // 获取队列前端的元素
  peek() {
      if (this.stack2.length === 0) {
          while (this.stack1.length > 0) {
              this.stack2.push(this.stack1.pop());
          }
      }
      return this.stack2[this.stack2.length - 1];
  }

  // 判断队列是否为空
  empty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

// 示例
const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.pop());  // 1
console.log(queue.pop());  // 2
console.log(queue.empty()); // true

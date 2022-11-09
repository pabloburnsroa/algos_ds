/* 
A stack is collection of data - LIFO - last in first out
Call stack 

push and pop in array creates a stack

BigO 
insertion O(1)
Removal O(1)
Search O(N)
Access O(N)
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    let node = new Node(value);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    }
    if (this.size >= 1) {
      let temp = this.first;
      this.first = node;
      this.first.next = temp;
    }
    this.size++;
    return this;
  }

  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  print() {
    let arr = [];
    let current = this.first;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

stack.print();
stack.pop();
stack.print();

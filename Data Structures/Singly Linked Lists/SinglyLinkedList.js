/*
DS containing head, tail and length property
nodes, each node has a value and a pointer to another node or null 
do not have indexes
random access is not allowed - have to traverese 
insertion, deletion 
*/

/* 

Push
Pop
Shift
Unshift
Get
Set
Insert
Remove
Reverse

*/
// Node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Add value to end of list
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  // Remove node from the end of the list
  pop() {
    // If no nodes in the list, return undefined
    if (!this.head) {
      return undefined;
    } else {
      let pre = this.head;
      let temp = pre;

      // Loop through the list until we reach the tail
      while (temp.next != null) {
        pre = temp;
        temp = temp.next;
      }
      // When we have reached the tail break the link to the tail and assign tail to last but one (pre)
      pre.next = null;
      this.tail = pre;
      // Decrement length as removed last node
      this.length--;
      // Check if length === 0, if so, head and tail assigned to null
      if (!this.length) {
        this.head = null;
        this.tail = null;
      }
      // return the node removed
      return temp;
    }
  }
  // Removing node from the beginning of the list
  shift() {
    // If no nodes, return undefined
    if (!this.head) {
      return undefined;
      // Otherwise, store current head property in a var
    } else {
      let temp = this.head;
      this.head = this.temp.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return temp;
    }
  }

  // Unshift - Add new node to beginning of list
  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  //  Retrieve node in list based on index
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      // Loop through list until index reached, return node at index
      let counter = 0;
      let current = this.head;
      while (counter != index) {
        current = current.next;
        counter++;
      }
      return current;
    }
  }
  // Update/set node in list
  set(val, index) {
    // Get the node from index provided
    let node = this.get(index);
    if (!node) {
      return false;
    } else {
      node.val = val;
      return true;
    }
  }

  // Insert node at specific location in list
  insert(val, index) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === this.length) {
      return this.push(val);
    } else if (index === 0) {
      return this.unshift(val);
    } else {
      // use get method to access node at index - 1
      let prev = this.get(index - 1);
      let newNode = new Node(val);
      // Placeholder temp so we dont lose connection to next node when inserting newNode
      let temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
    }
  }

  // Remove a node from a specific position in list
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) this.pop();
    if (index === 0) this.shift();
    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  // Reverse list in place
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
  }

  // PRINT LINKED LIST - HELPER FUNCTION 
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.print();
list.reverse();
list.print();

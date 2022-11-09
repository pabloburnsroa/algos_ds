class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (current.value === value) return undefined;
        if (value > current.value) {
          if (current.right === null) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        } else {
          if (current.left === null) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        }
      }
    }
  }
  find(value) {
    let current = this.root;
    if (current === null) {
      return false;
    }
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return 'Not found';
    return `${current.value} found!`;
  }
}

let tree = new BST();
tree.insert(5);
tree.insert(6);
tree.insert(4);
tree.insert(10);

let findANum = tree.find(5);
console.log(findANum);

/*
BigO of BST(have to be sorted)
Insertion - 0(log n)
Searching - 0(log n)

but not guaranteed

  
*/

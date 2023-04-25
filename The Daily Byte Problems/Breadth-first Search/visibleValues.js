/**
 * Given a binary tree return all the values you’d be able to see if you were standing on the left side of it with values ordered from top to bottom.

Ex: Given the following tree…

-->    4
      / \
-->  2   7
return [4, 2]

Ex: Given the following tree…

-->        7
         /  \
-->     4     9
       / \   / \
-->   1   4 8   9
                 \
-->               9
return [7, 4, 1, 9]

 * @param {*} root
 * @return {array} res
 */
function visibleValues(root) {
  let res = [];
  let q = [root];

  while (q[0]) {
    let leftSide = null;
    let qLen = q.length;
    for (let i = 0; i < qLen; i++) {
      let node = q.shift();
      if (node) {
        leftSide = node;
        if (node.left) q.append(node.left);
        if (node.right) q.append(node.right);
      }
    }
    if (leftSide) res.push(leftSide.val);
  }

  return res;
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
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
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        } else {
          if (current.right === null) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  visibleValues() {
    let res = [];
    let q = [];
    if (this.root === null) return res;
    q.push(this.root);

    while (q.length) {
      let leftSide = null;
      let qLen = q.length;
      for (let i = 0; i < qLen; i++) {
        let node = q.shift();
        if (node) {
          leftSide = node;
          q.push(node.left);
          q.push(node.right);
        }
      }
      if (leftSide) res.push(leftSide.val);
    }

    return res;
  }
}

let bst = new BinarySearchTree();
bst.root = new Node(4);
bst.insert(2);
bst.insert(7);
// console.log(bst);

let visibleValuesAns = bst.visibleValues();
console.log(visibleValuesAns);

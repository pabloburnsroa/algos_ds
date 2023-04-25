/*
 BST - Searching is quick as sorted


 What is a BST?/Tree
 Data structure consisting of nodes in parent/child relationship 
 Branches 

 HTML DOM - elements - nested elements - parent/child 
 
 */




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

  find(value) {
    if (this.root === null) {
      return false;
    } else {
      let current = this.root;
      let found = false;
      while (current && !found) {
        if (current.value === value) {
          found = true;
        } else if (current.value < value) {
          // Search right
          current = current.right;
        } else {
          // Search left
          current = current.left;
        }
      }
      if (!found) return 'Not found';
      return `${current.value} found!`;
    }
  }

  BreadthFirstSearch() {
    let node = this.root;
    let queue = [];
    let visited = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }

  DFSPreOrder() {
    let visited = [];
    let current = this.root;
    function helper(node) {
      visited.push(node.value);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    }
    helper(current);
    return visited;
  }
  DFSPostOrder() {
    let visited = [];
    let current = this.root;
    function helper(node) {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      visited.push(node.value);
    }
    helper(current);
    return visited;
  }
  DFSInOrder() {
    let visited = [];
    let current = this.root;
    function helper(node) {
      node.left && helper(node.left);
      visited.push(node.value);
      node.right && helper(node.right);
    }
    helper(current);
    return visited;
  }
}

let bst = new BinarySearchTree();
bst.root = new Node(10);
bst.insert(6);
bst.insert(8);
bst.insert(15);
bst.insert(3);
bst.insert(20);

let find = bst.find(33);
let BFS = bst.BreadthFirstSearch();
let DFSPreOrder = bst.DFSPreOrder();
let DFSPostOrder = bst.DFSPostOrder();
let DFSInOrder = bst.DFSInOrder();
console.log(BFS);

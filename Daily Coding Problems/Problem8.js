/*

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

class Count {
  constructor() {
    this.count = 0;
  }
}

/*
Inductive reasoning 
1. if input tree, t, is empty then return 0,
2. (inductive) - t is not empty - if t is a unival, return 1 plus the result of the recursive sub-problems, t.left and t.right
3. t is not empty nor is it a unival, return the sum of the result of the recursive sub-problems, t.left and t.right 
*/

function countUnivalSubtrees(root) {
  let count = 0;
  if (!root) {
    return 0;
  }
  // Helper function
  isUniValHelper(root, count);
  return count;
}

function isUniValHelper(node, count) {
  // check for both children being empty/null
  if (node.left === null && node.right === null) {
    count++;
    return true;
  }
}

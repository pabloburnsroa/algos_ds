/**
 *
 * @param {TreeNode} root
 * @description Given a reference to the root of a binary tree, return a list containing the average value in each level of the tree.

Ex: Given the following binary tree…

       1
      / \
    6    8
   / \ 
  1   5 
return [1.0, 7.0, 3.0]
 */
function averages(root) {
  return BFSApproach(root);
}

// BFS Approach
function BFSApproach(root) {
  let averages = [];
  let queue = [root];
  while (queue.length) {
    let qlen = queue.length,
      row = 0;
    for (let i = 0; i < qlen; i++) {
      // Remove first element in queue
      let current = queue.shift();
      // Add value of current to row variable
      row += current.val;
      // Check for left and right children on current node
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    averages.push(row / qlen);
  }
  return averages;
}

let root = [3, 9, 20, null, null, 15, 7];
let output = averages(root);
console.log(output);

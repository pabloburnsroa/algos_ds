/**
 * @param {TreeNode} root
 * @return {number}
 * @summary Given a binary tree, return its maximum depth.
Note: the maximum depth is defined as the number of nodes along the longest path from root node to leaf node.
 */

function calculateDepth(root) {
  if (root === null) return 0;
  let left = calculateDepth(root.left);
  let right = calculateDepth(root.right);
  return Math.max(left, right) + 1;
}

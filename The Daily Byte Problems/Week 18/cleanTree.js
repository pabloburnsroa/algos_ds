/**
 * @description Given the root of a binary tree where every node’s value is either 0 or 1 remove every subtree that does not have a 1 in it.
 
Ex: Given the following binary tree…

        1
      /   \
    1      0
Return the tree such that it’s been modified to look as follows…
        1
      /
    1
Ex: Given the following binary tree…

        1
      /   \
    1      1
Return the tree such that it’s been modified to look as follows…
        1
      /   \
    1      1
(No modifications are necessary)
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function cleanTree(root) {
  if (root == null) return null;
  if (root.left) root.left = cleanTree(root.left);
  if (root.right) root.right = cleanTree(root.right);
  if (!root.left && !root.right && root.val === 0) return null;
  return root;
}

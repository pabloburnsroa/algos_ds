/**
 * @description Given the root of a binary tree and two values low and high return the sum of all values in the tree that are within low and high.

Ex: Given the following tree where low = 3 and high = 5…

        1
       / \
      7   5
    /    / \
   4    3   9
return 12 (3, 4, and 5 are the only values within low and high and they sum to 12)
 */

function sumWithinBounds(root, low, high) {}

function DFS(root, low, high) {
  let sum = 0;
  if (!root) return sum;
  if (root.val > low) {
    sum += DFS(root.left, low, high);
  }
  if (root.val <= high && root.val >= low) {
    sum += root.val;
  }
  if (root.val < high) {
    sum += DFS(root.right, low, right);
  }
  return sum;
}

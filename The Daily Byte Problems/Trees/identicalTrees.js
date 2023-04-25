/**
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 */
function identicalTrees(p, q) {
  if (p == null && q == null) return true;
  if (p == null || q == null) return false;
  if (p.val !== q.val) return false;

  let left = identicalTrees(p.left, q.left);
  let right = identicalTrees(p.right, q.right);

  return left && right;
}

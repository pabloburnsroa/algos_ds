class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function validateTree(root: TreeNode | null): boolean {
  function helper(node, left, right) {
    if (!node) return true;
    if (node.val <= left) return false;
    if (node.val >= right) return false;

    return (
      helper(node.left, left, node.val) && helper(node.right, node.val, right)
    );
  }
  return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

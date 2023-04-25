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

function symmetricalTree(root: TreeNode | null): boolean {
  function helper(left, right) {
    if (!left.val && !right.val) return true;
    if (!left || !right) return false;
    return (
      left.val === right.val &&
      helper(left.left, right.right) &&
      helper(left.right, right.left)
    );
  }
  return root ? helper(root.left, root.right) : true;
}

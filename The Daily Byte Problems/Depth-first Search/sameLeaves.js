/**
 *
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 * @description Given two binary trees, return whether or not both trees have the same leaf sequence. Two trees have the same leaf sequence if both trees’ leaves read the same from left to right.
 */

function sameLeaves(root1, root2) {
  function helper(root) {
    if (!root) return [];
    // TODO

    return helper(root1) === helper(root2);
  }
}

function convertBinarySearchTreeToSortedLinkedList(root) {
  let data = [];
  function helper(node) {
    if (node.left) helper(node.left);
    data.push(node.val);
    if (node.right) helper(node.right);
  }
  helper(root);
  return data;
}

let case1 = [5, 1, 6];

console.log(convertBinarySearchTreeToSortedLinkedList(case1));
 
let rootToLeafPaths = function (root) {
  let result = [];
  if (root === null) return result;
  let current_path = root.val.toString();
  if (root.left === null && root.right === null) {
    result.push(current_path);
  }
  if (root.left !== null) helperFunction(root.left, current_path, result);
  if (root.right !== null) helperFunction(root.right, current_path, result);

  return result;

  function helperFunction(node, current_path, result) {
    current_path += '->' + node.val;
    if (node.left == null && node.right == null) result.push(current_path);
    if (node.left !== null) helperFunction(node.left, current_path, result);
    if (node.right !== null) helperFunction(node.right, current_path, result);
  }
};

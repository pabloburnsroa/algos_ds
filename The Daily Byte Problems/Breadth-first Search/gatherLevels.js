function gatherLevels(root) {
  let res = [];
  let q = [];
  if (root) {
    q.push(root);
  } else {
    return res;
  }

  while (q.length) {
    let qLen = q.length;
    let level = [];
    for (let i = 0; i < qLen; i++) {
      let node = q.shift();
      if (node) {
        level.push(node.val);
        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
      }
    }
    if (level) {
      res.push(level);
    }
  }

  return res;
}

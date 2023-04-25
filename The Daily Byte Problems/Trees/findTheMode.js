let findMode1 = function (root) {
  let last = -1;
  let count = 0;
  let max = 0;
  let res = [];

  search(root);
  return res;

  function search(node) {
    if (!node) return;

    search(node.left);

    if (node.val !== last) {
      last = node.val;
      count = 1;
      if (count > max) {
        res.push(node.val);
      }
    } else {
      count++;
      if (count === max) {
        res.push(node.val);
      } else if (count > max) {
        max = count;
        res = [node.val];
      }
    }

    search(node.right);
  }
};

// SOLUTION 2 
// FIX THIS - DOESN'T WORK
let findMode2 = function (root) {
  let modes = [];
  let prev = null;
  let count = 1;
  let max = 0;
  
  traverse(root, modes);

  let result = [];
  for (let i = 0; i < modes.length; i++) {
    result[i] = modes[i];
  }
  return result;

  function traverse(node, modes) {
    if (!node) return;
    traverse(node.left, modes);
    if (prev !== null) {
      if (prev == node.val) {
        count++;
      } else {
        count = 1;
      }
    }
    if (count > max) {
      max = count;
      modes = [node.val];
      
    } else if (count === max) {
      modes.push(node.val);
    }
    prev = node.val;
    traverse(node.right, modes);
  }

};

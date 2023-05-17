function approach1(s, t) {
  let queue = [];
  for (let i = 0; i < s.length; i++) {
    queue.push(s[i]);
  }
  for (let j = 0; j < t.length; j++) {
    if (queue[0] === t[j]) queue.shift();
  }
  return queue.length === 0;
}

// 2 pointers
function approach2(s, t) {}

let s1 = 'abc';
let t1 = 'aabbcc';

let s2 = 'cpu';
let t2 = 'computer';

let s3 = 'xyz';
let t3 = 'axbyc';

let output = approach1(s3, t3);
console.log(output);

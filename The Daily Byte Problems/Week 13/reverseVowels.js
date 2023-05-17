// iterative approach
function approach1(s) {
  let array = s.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      stack.push(s[i]);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      array[i] = stack.pop();
    }
  }
  return array.join('');
}

let input1 = 'hello';
let output1 = approach1(input1);
console.log(output1);

// two pointer approach
function approach2(s) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let array = s.split('');
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (
      vowels.includes(s[l].toLowerCase()) &&
      vowels.includes(s[r].toLowerCase())
    ) {
      [array[l], array[r]] = [array[r], array[l]];
      l++;
      r--;
    }
    if (!vowels.includes(s[l].toLowerCase())) {
      l++;
    }
    if (!vowels.includes(s[r].toLowerCase())) {
      r--;
    }
  }
  return array.join('');
}

let input2 = 'leetcode';
let output2 = approach2(input2);
console.log(output2);

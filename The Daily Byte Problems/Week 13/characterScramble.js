function approach1(passage, text) {
  let hashMap = {};
  for (let i = 0; i < text.length; i++) {
    if (!hashMap[text[i]]) {
      hashMap[text[i]] = 1;
    } else hashMap[text[i]] += 1;
    console.log(hashMap[text[i]]);
  }
  return hashMap;
}

let passage1 = 'bat';
let text1 = 'cat';

let output = approach1(passage1, text1);
console.log(output);

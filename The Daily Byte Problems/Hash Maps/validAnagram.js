function validAnagram(string1, string2) {
  let string1Map = {};

  for (let i = 0; i < string1.length; i++) {
    string1Map[string1[i]] = string1Map[string1[i]] + 1 || 1;
  }
  // console.log(string1Map);
  for (let j = 0; j < string2.length; j++) {
    if (string1Map[string2[j]] === undefined) {
      return false;
    } else {
      string1Map[string2[j]] = string1Map[string2[j]] - 1;
    }
  }
  for (let char in string1Map) {
    if (string1Map[char] !== 0) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram('cat', 'tac'));
console.log(validAnagram('listen', 'silent'));
console.log(validAnagram('program', 'function'));

function firstUniqueCharacter(string) {
  let charMap = {};
  for (let char in string) {
    charMap[string[char]] = charMap[string[char]] + 1 || 1;
  }
  for (let char in string) {
    if (charMap[string[char]] == 1) {
      return string.indexOf(string[char]);
    }
  }
  return -1;
}

console.log(firstUniqueCharacter('abcabd'));

const lengthOfLastWord = (s) => {
  let i = s.length - 1;
  let lastWord = 0;

  while (s[i] == ' ') i -= 1;
  while (i >= 0 && s[i] != ' ') {
    lastWord += 1;
    i -= 1;
  }
  return lastWord;
};

let s = 'Hello World';
console.log(lengthOfLastWord(s));

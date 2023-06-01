function wordLength(s) {
  let length = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) != ' ') length++;
    else if (length > 0) return length;
  }
  return length;
}

s = 'The Daily Byte     ';
console.log(wordLength(s));

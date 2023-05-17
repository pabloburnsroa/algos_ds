function keyboardRow(words) {
  return approach1(words);
}

// Approach 1 - filter out words in array that fail to match condition(only requiring single row of keyboard)

function approach1(words) {
  return words.filter((w) => {
    if (
      /^[qwertyuiop]*$/i.test(w) ||
      /^[asdfghjkl]*$/i.test(w) ||
      /^[zxcvbnm]*$/i.test(w)
    )
      return true;
    return false;
  });
}

let input = ['Hello', 'Alaska', 'Dad', 'Peace'];
let output = keyboardRow(input);
console.log(output);

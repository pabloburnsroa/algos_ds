// Naive Approach to string search
function naive(str, pattern) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      console.log(pattern[j], str[i + j]);
      if (pattern[j] !== str[i + j]) {
        console.log('BREAK');
        break;
      }
    }
  }
}

const result1 = naive('lorie loled', 'lol');

console.log(result1);
 
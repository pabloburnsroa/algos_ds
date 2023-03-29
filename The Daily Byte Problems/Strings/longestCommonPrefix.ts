function longestCommonPrefix(strs: string[]): string {
  strs.sort();
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) return strs[0].slice(0, i);
    }
  }
  return '';
}

// console.log(longestCommonPrefix1(['colarado', 'color', 'cold']));

// function longestCommonPrefix2(arrayOfStrings: string[]): string {
//   let result = '';
//   arrayOfStrings.sort();
//   // arrayOfStrings.reduce((acc, currWord) => {});

//   return result;
// }

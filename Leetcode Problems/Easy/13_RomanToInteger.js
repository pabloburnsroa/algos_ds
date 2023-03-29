let romanToInt = function (s) {
  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let ans = 0;
  // iterative from right to left
  for (let i = s.length - 1; i >= 0; i--) {
    let num = roman[s.charAt(i)];
    // check for instances of subtraction
    if (num * 4 < ans) ans -= num;
    else ans += num;
  }
  return ans;
};

let input = 'VIMCIV';
let answer = romanToInt(input);
console.log(answer);

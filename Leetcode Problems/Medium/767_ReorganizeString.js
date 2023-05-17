/**
 *
 * @param {string} s
 * @description Given a string, check if it can be modified such that no two adjacent characters are the same. If it is possible, return any string that satisfies this condition and if it is not possible return an empty string.
 */

let reorganizeString = function (s) {
  let letters = new Map();
  for (let i = 0; i < s.length; i++) {
    if (letters.has(s[i])) {
      letters.set(s[i], letters.get(s[i]) + 1);
    } else {
      letters.set(s[i], 1);
    }
  }

  for (let [k, v] of letters) {
    if (v > Math.ceil(s.length / 2)) return '';
  }

  let output = '';
  let maxK = '';
  let lastK = '';
  while (true) {
    let maxV = 0;
    for (let [k, v] of letters) {
      if (v > maxV && k != lastK) {
        maxV = v;
        maxK = k;
      }
    }
    if (maxV == 0) return output;
    output += maxK;
    letters.set(maxK, maxV - 1);
    lastK = maxK;
  }
};

let reorganizeString2 = function (s) {
  let letters = new Map();
  for (let i = 0; i < s.length; i++) {
    if (letters.has(s[i])) {
      letters.set(s[i], letters.get(s[i]) + 1);
    } else {
      letters.set(s[i], 1);
    }
  }
  let heap = new MaxPriorityQueue();
};

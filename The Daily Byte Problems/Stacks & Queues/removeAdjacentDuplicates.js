/**
 *
 * @param {string} s
 * @returns {string}
 */
// function removeAdjacentDuplicates(s) {}

const removeDuplicates = (s) => {
  const arr = s.split('');
  let ans = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (ans === 0 || arr[i] !== arr[ans - 1]) {
      arr[ans++] = arr[i];
      console.log(`i: ${i}, ans:${ans}, arr: ${arr}`);
    } else {
      --ans;
      console.log(`i: ${i}, ans:${ans}, arr: ${arr}`);
    }
  }
  return arr.slice(0, ans).join('');
};

let s = 'foobar';
console.log(removeDuplicates(s));

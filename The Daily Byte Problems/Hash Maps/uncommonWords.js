/**
 *
 * @param {string} sentence1
 * @param {string} sentence2
 * @returns {number[]}
 * @readonly Given two strings representing sentences, return the words that are not common to both strings (i.e. the words that only appear in one of the sentences). You may assume that each sentence is a sequence of words (without punctuation) correctly separated using space characters.
 */
function uncommonWords(sentence1, sentence2) {
  let s1 = sentence1.split(' ');
  let s2 = sentence2.split(' ');
  let map = new Map();
  let uncommon = [];
  for (let word of s1) {
    map.set(word, (map.get(word) || 0) + 1);
  }
  for (let word of s2) {
    map.set(word, (map.get(word) || 0) + 1);
  }
  // console.log(map);
  for (let [word, count] of map) {
    if (count === 1) {
      uncommon.push(word);
    }
  }
  return uncommon;
}

console.log(uncommonWords('the quick', 'brown fox'));

console.log(
  uncommonWords('the tortoise beat the haire', 'the tortoise lost to the haire')
);

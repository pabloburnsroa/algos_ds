function jewelsAndStones(stones, jewels) {
  let countMap = {};
  for (let i = 0; i < stones.length; i++) {
    countMap[stones[i]] = countMap[stones[i]] + 1 || 1;
  }
  let jewelsCount = 0;
  for (let i = 0; i < jewels.length; i++) {
    if (countMap[jewels[i]]) {
      jewelsCount += countMap[jewels[i]];
    }
  }
  return jewelsCount;
}

console.log(jewelsAndStones('ac', 'abc'));
console.log(jewelsAndStones('AaaddfFf', 'Af'));
console.log(jewelsAndStones('ayopd', 'AYOPD'));

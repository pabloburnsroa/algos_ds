/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  if (stones.length === 0) return 0;
  if (stones.length == 1) return stones[0];
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);
    console.log(stones);
    let smashed = stones[stones.length - 1] - stones[stones.length - 2];
    stones.splice(-2, 2);
    stones.push(smashed);
  }
  return stones[0];
};

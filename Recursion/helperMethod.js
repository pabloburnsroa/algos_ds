// Helper method recursion

function collectOddValues(arr) {
  let result = [];

  function helper(input) {
    if (input.length === 0) {
      return 0;
    }
    if (input[0] % 2 !== 0) {
      result.push(input[0]);
    }
    return helper(input.slice(1));
  }

  helper(arr);
  return result;
}

const result1 = collectOddValues([1, 3, 5, 6, 2, 3, 4, 5, 6, 7, 77, 8, 10, 33]);
console.log(result1);

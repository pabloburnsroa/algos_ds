const mySqrt1 = (x) => {};
const mySqrt2 = (x) => {
  let left = 1,
    right = x / 2,
    ans;

  while (left <= right) {
    let mid = (left + right) / 2;
    if (mid * mid == x) return mid;
    if (mid > x / mid) {
      right = mid - 1;
    }
    if (mid + 1 <= x / (mid + 1)) {
      left = mid + 1;
    }
  }
  return x;
};

function floorSqrt(x) {
  // Base cases
  if (x == 0 || x == 1) return x;

  // Do Binary Search
  // for floor(sqrt(x))
  let start = 1;
  let end = x / 2;
  let ans;
  while (start <= end) {
    let mid = (start + end) / 2;

    // If x is a perfect square
    if (mid * mid == x) return mid;

    // Since we need floor, we update
    // answer when mid*mid is  smaller
    // than x, and move closer to sqrt(x)
    if (mid * mid < x) {
      start = mid + 1;
      ans = mid;
    }

    // If mid*mid is
    // greater than x
    else end = mid - 1;
  }
  return ans;
}

const mySqrt = function (x) {
  if (x < 2) return x;

  let left = 1;
  let right = x;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    let test = mid * mid;
    if (test === x) {
      return mid;
    } else if (test > x) {
      right = mid;
    } else if (test < x) {
      left = mid + 1;
    }
  }
  return left - 1;
};

console.log(mySqrt(4));

function countingPrimes(n) {
  if (n <= 2) {
    return 0;
  }

  let primes = 0;
  for (let i = 3; i < n; i++) {
    if (helper(i)) {
      primes++;
    }
  }
  return primes;

  function helper(m) {
    for (let j = 3; j < m; j++) {
      if (m % j === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(countingPrimes(10));

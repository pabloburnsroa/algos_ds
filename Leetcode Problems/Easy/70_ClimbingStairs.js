/*

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

*/
function climbStairs(n) {
  var _a;
  if (n < 3) return n;
  var _b = [1, 2],
    s1 = _b[0],
    s2 = _b[1];
  for (var i = 3; i < n + 1; i++) {
    var temp = s1 + s2;
    (_a = [s2, temp]), (s1 = _a[0]), (s2 = _a[1]);
  }
  return s2;
}
/*
 DFS Recursion?? O(n) - memoization
Decision tree
n=5

            0
        1       2
      2   3   3    4
    3   4 4 5
          base case

Solve the base case first? DP - Bottom Up???
Fibonacci sequence

*/
console.log(climbStairs(5));

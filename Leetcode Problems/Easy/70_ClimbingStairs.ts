/*

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

*/

function climbStairs(n: number): number {
  if (n < 3) return n;
  let [s1, s2] = [1, 2];
  for (let i = 3; i < n + 1; i++) {
    let temp = s1 + s2;
    [s1, s2] = [s2, temp];
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

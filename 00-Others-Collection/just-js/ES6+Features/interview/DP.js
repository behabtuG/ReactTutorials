/* *What are the two properties the problem needs to have for dynamic programming to be applicable? (Select 2)
*✅ 1. Overlapping Subproblems

    The problem can be broken down into smaller subproblems that are reused multiple times.

    Instead of solving the same subproblem again and again, DP stores the results (memoization/tabulation).

Example:
Fibonacci numbers — fib(n) = fib(n-1) + fib(n-2) — both fib(n-1) and fib(n-2) are reused many times.
*✅ 2. Optimal Substructure

    The optimal solution of the problem can be built from the optimal solutions of its subproblems.

    Solving subproblems optimally helps in solving the overall problem optimally.

Example:
Shortest path in a graph — the shortest path from A to C through B is the sum of shortest path A → B and B → C.
*/

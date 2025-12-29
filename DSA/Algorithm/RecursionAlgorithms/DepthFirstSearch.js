// Depth First Search (DFS) using Recursion
const dfs = (graph, node, visited = new Set()) => {
  if (visited.has(node)) return; // Base case: Already visited
  console.log(node); // Process the node
  visited.add(node);
  for (let neighbor of graph[node]) {
    dfs(graph, neighbor, visited); // Recursive step
  }
};

let graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: [],
};

console.log(dfs(graph, "A"));
/*
Output:
A
B
D
E
F
C
*/

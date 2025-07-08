const { MinPriorityQueue } = require("@datastructures-js/priority-queue");
const dijkstra = (graph, source) => {
  const distances = {};
  const visited = {};
  const pq = new MinPriorityQueue(); // Use a priority queue for efficiency

  for (const node in graph) {
    distances[node] = Infinity;
    visited[node] = false;
  }
  distances[source] = 0;
  pq.enqueue(source, 0);

  while (!pq.isEmpty()) {
    const { element: current } = pq.dequeue();
    visited[current] = true;

    for (const neighbor in graph[current]) {
      if (!visited[neighbor]) {
        const newDist = distances[current] + graph[current][neighbor];
        if (newDist < distances[neighbor]) {
          distances[neighbor] = newDist;
          pq.enqueue(neighbor, newDist);
        }
      }
    }
  }

  return distances;
};

// Example graph as an adjacency list
const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 6 },
  C: { A: 4, B: 2, D: 3 },
  D: { B: 6, C: 3 },
};

console.log(dijkstra(graph, "A")); // Output: Shortest distances from A

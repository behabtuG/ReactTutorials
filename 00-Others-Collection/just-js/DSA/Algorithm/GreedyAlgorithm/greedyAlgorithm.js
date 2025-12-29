// Activity Selection Problem using Greedy Algorithm
const activitySelection = (start, finish) => {
  const n = start.length;
  const activities = [];

  // Create an array of activities with start and finish times
  for (let i = 0; i < n; i++) {
    activities.push({ start: start[i], finish: finish[i] });
  }

  // Sort activities by their finish times
  activities.sort((a, b) => a.finish - b.finish);

  let count = 1; // Always select the first activity
  let lastFinish = activities[0].finish;

  for (let i = 1; i < n; i++) {
    if (activities[i].start >= lastFinish) {
      count++; // Select the activity
      lastFinish = activities[i].finish;
    }
  }

  return count;
};

const start = [1, 3, 0, 5, 8, 5];
const finish = [2, 4, 6, 7, 9, 9];
console.log(activitySelection(start, finish)); // Output: 4

const fractionalKnapsack = (weights, values, capacity) => {
  const n = weights.length;
  const items = [];

  // Calculate value-to-weight ratio for each item
  for (let i = 0; i < n; i++) {
    items.push({
      weight: weights[i],
      value: values[i],
      ratio: values[i] / weights[i],
    });
  }

  // Sort items by value-to-weight ratio in descending order
  items.sort((a, b) => b.ratio - a.ratio);

  let totalValue = 0;

  for (const item of items) {
    if (capacity === 0) break;

    if (item.weight <= capacity) {
      totalValue += item.value;
      capacity -= item.weight;
    } else {
      totalValue += item.ratio * capacity;
      capacity = 0;
    }
  }

  return totalValue;
};

const weights = [10, 20, 30];
const values = [60, 100, 120];
const capacity = 50;
console.log(fractionalKnapsack(weights, values, capacity)); // Output: 240

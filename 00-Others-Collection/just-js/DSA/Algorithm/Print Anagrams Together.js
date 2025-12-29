// Print Anagrams Together
class Solution {
  anagrams(arr) {
    const groups = new Map();

    // Group words by sorted signature
    for (const word of arr) {
      const sortedWord = word.split("").sort().join("");
      if (!groups.has(sortedWord)) {
        groups.set(sortedWord, []);
      }
      groups.get(sortedWord).push(word);
    }

    // Return the grouped anagrams
    return Array.from(groups.values());
  }
}

// Example usage:
const solution = new Solution();
const arr = [
  "eat",
  "tea",
  "tan",
  "ate",
  "nat",
  "bat",
  "god",
  "dog",
  "act",
  "cat",
  "tac",
];
const result = solution.anagrams(arr);
console.log(result);
// Output: [ [ 'eat', 'tea', 'ate' ],[ 'tan', 'nat' ],[ 'bat' ],[ 'god', 'dog' ],[ 'act', 'cat', 'tac' ] ]

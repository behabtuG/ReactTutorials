const towersOfHanoi = (n, from, to, aux) => {
  if (n === 1) {
    console.log(`Move disk 1 from ${from} to ${to}`);
    return;
  }
  towersOfHanoi(n - 1, from, aux, to); // Move n-1 disks from source to auxiliary peg
  console.log(`Move disk ${n} from ${from} to ${to}`); // Move nth disk from source to destination
  towersOfHanoi(n - 1, aux, to, from); // Move n-1 disks from auxiliary peg to destination
};

towersOfHanoi(3, "A", "C", "B"); // Output: Moves to solve the problem for 3 disks

//?solution two

class Solution {
  towerOfHanoi(n, from, to, aux) {
    // code here
    if (n === 1) {
      console.log(`Move disk 1 from rod ${from} to rod ${to}`);
      return 1; // One move
    }

    // Step 1: Move (n-1) disks from 'from' to 'aux' using 'to' as auxiliary
    let moves1 = this.towerOfHanoi(n - 1, from, aux, to);

    // Step 2: Move the nth disk from 'from' to 'to'
    console.log(`Move disk ${n} from rod ${from} to rod ${to}`);
    let moves2 = 1; // This is a single move

    // Step 3: Move (n-1) disks from 'aux' to 'to' using 'from' as auxiliary
    let moves3 = this.towerOfHanoi(n - 1, aux, to, from);

    // Return the total number of moves
    return moves1 + moves2 + moves3;
  }
}

// Example usage:
let solution = new Solution();
let n = 3; // Number of disks
let totalMoves = solution.towerOfHanoi(n, 1, 3, 2); // Move n disks from rod 1 to rod 3 using rod 2
console.log(`Total moves required: ${totalMoves}`); // Output: Total moves required: 7

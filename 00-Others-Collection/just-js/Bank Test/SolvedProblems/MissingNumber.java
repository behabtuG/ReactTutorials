package SolvedProblems;

import java.util.HashSet;
import java.util.Set;

public class MissingNumber {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 4, 5, 6 }; // Array with a missing element
        int n = 6; // Total numbers from 1 to n
        int missing = findMissingNumber(arr, n);
        int missing2222 = firstMissingPositive(arr);
        System.out.println("The missing number 11 is: " + missing);
        System.out.println("The missing number 22 is: " + missing2222);
    }

    public static int firstMissingPositive(int[] nums) {
        Set<Integer> seen = new HashSet<>();
        // Add all positive numbers to the set
        for (int num : nums) {
            if (num > 0) {
                seen.add(num);
            }
        }

        // Start checking from 1 upwards for the first missing positive
        int smallest = 1;
        while (true) {
            if (!seen.contains(smallest)) {
                return smallest; // Return the first missing positive number
            }
            smallest++;
        }
    }

    public static int findMissingNumber(int[] arr, int n) {
        // Calculate expected sum
        int expectedSum = n * (n + 1) / 2;

        // Calculate actual sum
        int actualSum = 0;
        for (int num : arr) {
            actualSum += num;
        }

        // Missing number is the difference
        return expectedSum - actualSum;
    }

}

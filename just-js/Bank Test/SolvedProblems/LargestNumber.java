package SolvedProblems;

public class LargestNumber {
    public static int findLargestNumber(int[] arr) {
        int max = arr[0];
        for (int num : arr) {
            if (num > max) {
                max = num;
            }
        }
        return max;
    }

    public static int findLargest(int[] arr) {
        int max = arr[0]; // Assume the first element is the largest
        int i = 1; // Start from the second element
        while (i < arr.length) {
            if (arr[i] > max) {
                max = arr[i]; // Update max if a larger number is found
            }
            i++; // Move to the next element
        }
        return max;
    }

    public static void main(String[] args) {
        int[] numbers = { 3, 5, 7, 2, 8, 10 };
        int largest = findLargestNumber(numbers);
        System.out.println("The largest number is: " + largest);
    }

}

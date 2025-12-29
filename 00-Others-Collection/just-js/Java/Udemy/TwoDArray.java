import java.util.Arrays;

public class TwoDArray {

    public static int[][] initializeMatrix() {
        // Direct initialization of a 2D array
        int[][] matrix = {
                { 1, 2, 3 },
                { 4, 5, 6 },
                { 7, 8, 9 }
        };
        return matrix;
    }

    public static void main(String[] args) {
        int[][] matrix = initializeMatrix();

        // Print the matrix using Arrays.deepToString()
        System.out.println(Arrays.deepToString(matrix));
    }
}
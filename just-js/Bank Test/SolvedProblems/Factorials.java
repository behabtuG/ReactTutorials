package SolvedProblems;

public class Factorials {

    public static int findFactorial(int n) {
        if (n == 0 || n == 1) {
            return 1;
        } else
            return n * findFactorial(n - 1);
    }

    public static void main(String[] args) {
        int number = 5;
        int result = findFactorial(number);
        System.out.println("factorial of '" + number + "' is: " + result);
    }
}

package SolvedProblems;

public class NullString {
    public static void main(String[] args) {
        String a = null;
        StringBuilder b = new StringBuilder(a);
        System.out.println(a);
        System.out.println(b);
    }
}

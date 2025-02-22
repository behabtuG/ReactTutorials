package Encapsulation;

/*
 * Encapsulation is the mechanism of wrapping data (variables) and methods into a single unit (class). 
 * Access to these is controlled using access modifiers (private, protected, public).
 */
public class Student {
    private String name; // Private data member
    private int age;

    // Public getter and setter methods
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public static void main(String[] args) {
        Student student = new Student();
        student.setName("John");
        student.setAge(20);

        System.out.println("Name: " + student.getName());
        System.out.println("Age: " + student.getAge());
    }
}

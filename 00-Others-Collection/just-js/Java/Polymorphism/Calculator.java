package Polymorphism;

/*
 * Polymorphism allows one interface to be used for a general class of actions. It can be compile-time 
 * (method overloading) or runtime (method overriding).
 * Example of Method Overloading:
 */
//?Example of Abstract Class:
public class Calculator {

    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(2, 3)); // Calls int version
        System.out.println(calc.add(2.5, 3.5)); // Calls double version
    }
}

// ?Example of Method Overriding:
class Animals {
    void sound() {
        System.out.println("This animal makes a sound.");
    }
}

class Dogs extends Animals {
    @Override
    void sound() {
        System.out.println("The dog barks.");
    }

    public static void main(String[] args) {
        Animals animal = new Dogs(); // Polymorphic reference
        animal.sound(); // Calls Dog's overridden method
    }
}

// ? Example of Interface:
interface Vehicle {
    void start(); // Abstract method
}

class Car implements Vehicle {
    public void start() {
        System.out.println("Car starts with a key.");
    }

    public static void main(String[] args) {
        Vehicle vehicle = new Car();
        vehicle.start();
    }
}

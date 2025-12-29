package ClassObjectInstance;

/*
 * What is a Class?
 *   A class is a blueprint for creating objects. It defines the properties (fields/attributes) and 
 *   behaviors (methods) that the objects created from the class will have.
* What is an Object Instance?
 *   An object is an instance of a class. When a class is instantiated, an object is created in memory.
 */
// Define a class
public class Car {

    // Fields (attributes)
    String brand;
    String color;
    int speed;

    // Constructor to initialize object
    Car(String brand, String color, int speed) {
        this.brand = brand;
        this.color = color;
        this.speed = speed;
    }

    // Method (behavior)
    void start() {
        System.out.println(brand + " is starting.");
    }

    void accelerate(int increment) {
        speed += increment;
        System.out.println(brand + " is now moving at " + speed + " km/h.");
    }

    // Main method to create object instances
    public static void main(String[] args) {
        // Create object instances of the Car class
        Car car1 = new Car("Toyota", "Red", 0); // Object instance 1
        Car car2 = new Car("Honda", "Blue", 0); // Object instance 2

        // Access fields and call methods on objects
        car1.start();
        car1.accelerate(50);

        car2.start();
        car2.accelerate(70);
    }
}

/*
 * //! Key Concepts:
 * Class:
 * Defined using the class keyword.
 * Contains fields (attributes) and methods (behaviors).
 * Acts as a template to create objects.
 * 
 * Object Instance:
 * Created from a class using the new keyword.
 * Each object has its own copy of the class's fields but shares the same
 * methods.
 * Example: Car car1 = new Car("Toyota", "Red", 0);
 * 
 * Constructor:
 * Special method used to initialize an object when it is created.
 * In the example, Car(String brand, String color, int speed) is the
 * constructor.
 * 
 * Accessing Fields and Methods:
 * Fields are accessed using objectName.fieldName.
 * Methods are called using objectName.methodName().
 */
/*
 * //! Key Points About Objects in Java:
 * Each object is independent and maintains its own state.
 * Objects are stored in the heap memory.
 * Objects are garbage-collected when no longer referenced.
 */
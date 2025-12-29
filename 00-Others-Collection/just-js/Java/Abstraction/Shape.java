package Abstraction;

/*
 * Abstraction hides the implementation details and only shows the functionality. 
 * It is achieved using abstract classes or interfaces.
 */
public abstract class Shape {
    abstract void draw(); // Abstract method
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing a circle.");
    }

    public static void main(String[] args) {
        Shape shape = new Circle();
        shape.draw();
    }
}

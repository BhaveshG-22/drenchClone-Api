import java.util.Scanner;

public class Triangle extends GeometricObject {
    private double side1;
    private double side2;
    private double side3;

    public Triangle() {
        side1 = 1.0;
        side2 = 1.0;
        side3 = 1.0;
    }

    public Triangle(double side1, double side2, double side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    public double getSide1() {
        return side1;
    }

    public void setSide1(double side1) {
        this.side1 = side1;
    }

    public double getSide2() {
        return side2;
    }

    public void setSide2(double side2) {
        this.side2 = side2;
    }

    public double getSide3() {
        return side3;
    }

    public void setSide3(double side3) {
        this.side3 = side3;
    }

    public double getPerimeter() {
        return side1 + side2 + side3;
    }

    @Override
    public String toString() {
        return "Triangle: side1 = " + side1 + ", side2 = " + side2 + ", side3 = " + side3 +
               "\nperimeter = " + getPerimeter() + "\n" + super.toString();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter side1 of the triangle: ");
        double side1 = scanner.nextDouble();
        System.out.print("Enter side2 of the triangle: ");
        double side2 = scanner.nextDouble();
        System.out.print("Enter side3 of the triangle: ");
        double side3 = scanner.nextDouble();

        Triangle triangle = new Triangle(side1, side2, side3);

        System.out.print("Enter color of the triangle: ");
        String color = scanner.next();
        triangle.setColor(color);

        System.out.print("Is the triangle filled? (true/false): ");
        boolean filled = scanner.nextBoolean();
        triangle.setFilled(filled);

        System.out.println("\nTriangle Information:");
        System.out.println(triangle);
    }
}

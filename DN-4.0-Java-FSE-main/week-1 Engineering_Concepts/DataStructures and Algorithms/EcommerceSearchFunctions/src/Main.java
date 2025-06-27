public class Main {
    public static void main(String[] args) {
        Product[] products = {
                new Product(101, "Shoes", "Footwear"),
                new Product(203, "Laptop", "Electronics"),
                new Product(150, "Watch", "Accessories"),
                new Product(175, "Phone", "Electronics")
        };

        int searchId = 150;

        System.out.println("----- Linear Search -----");
        int result1 = LinearSearch.search(products, searchId);
        if (result1 != -1)
            System.out.println("Product found: " + products[result1].productName);
        else
            System.out.println("Product not found.");

        System.out.println("\n----- Binary Search -----");
        int result2 = BinarySearch.search(products, searchId);
        if (result2 != -1)
            System.out.println("Product found: " + products[result2].productName);
        else
            System.out.println("Product not found.");
    }
}

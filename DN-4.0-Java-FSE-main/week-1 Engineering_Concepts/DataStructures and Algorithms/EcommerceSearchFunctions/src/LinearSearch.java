public class LinearSearch {
    public static int search(Product[] products, int productId) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productId == productId) {
                return i;
            }
        }
        return -1;
    }
}

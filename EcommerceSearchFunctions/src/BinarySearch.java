import java.util.Arrays;
import java.util.Comparator;

public class BinarySearch {
    public static int search(Product[] products, int productId) {

        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;

            if (products[mid].productId == productId)
                return mid;
            else if (products[mid].productId < productId)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return -1;
    }
}

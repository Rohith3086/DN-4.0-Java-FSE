public class Forecast {


    public static double forecastValue(double amount, double rate, int years) {

        if (years == 0) {
            return amount;
        }

        return forecastValue(amount * (1 + rate), rate, years - 1);
    }

    public static void main(String[] args) {
        double initialAmount = 1000.0;
        double growthRate = 0.10;
        int years = 5;

        double futureValue = forecastValue(initialAmount, growthRate, years);
        System.out.printf("Future value after %d years = ₹%.2f\n", years, futureValue);
    }
}

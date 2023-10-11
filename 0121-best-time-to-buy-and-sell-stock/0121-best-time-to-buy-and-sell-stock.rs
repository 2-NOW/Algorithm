impl Solution {
    pub fn max_profit(prices: Vec<i32>) -> i32 {
        if prices.is_empty() { return 0 }

        let mut min = i32::MAX;
        let mut max_profit = 0;

        for price in prices {
            if price < min {
                min = price;
            }

            if price - min > max_profit {
                max_profit = price - min;
            }
        }

        max_profit
    }
}
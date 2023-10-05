impl Solution {
    pub fn climb_stairs(n: i32) -> i32 {
        let _n = n as usize;

        if _n == 1 {
            return 1;
        }

        let mut dp: Vec<i32> = vec![0; _n + 1];

        dp[0] = 1;
        dp[1] = 1;

        for i in 2..=_n {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        dp[_n]
    }
}
use std::collections::HashSet;

impl Solution {
    pub fn single_number(nums: Vec<i32>) -> i32 {
        let mut xor_result = 0;

        for num in nums {
            xor_result ^= num;
        }

        xor_result
    }
}
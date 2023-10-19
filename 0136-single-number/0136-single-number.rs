use std::collections::HashSet;

impl Solution {
    pub fn single_number(nums: Vec<i32>) -> i32 {
        let mut set = HashSet::new();

        for num in nums {
            if !set.contains(&num) {
                set.insert(num);
            } else {
                set.remove(&num);
            }
        }

        *set.iter().next().unwrap_or(&0)
    }
}
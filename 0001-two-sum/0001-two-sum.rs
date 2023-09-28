use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut map = HashMap::new();

        for (index, &num) in nums.iter().enumerate() {
            let completion = target - num;
            if map.contains_key(&completion) {
                return vec![map[&completion], index as i32];
            }
            map.insert(num, index as i32);
        }
        Vec::new()
    }
}
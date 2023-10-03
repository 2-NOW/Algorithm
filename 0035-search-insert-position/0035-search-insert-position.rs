impl Solution {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
        let mut l = 0;
        let mut r = nums.len() as i32 - 1;
        
        while l <= r {
            let c = l + (r - l) / 2;
            if nums[c as usize] == target {
                return c;
            } else if nums[c as usize] < target {
                l = c + 1;
            } else {
                r = c - 1;
            }
        }

        return l;
    }
}
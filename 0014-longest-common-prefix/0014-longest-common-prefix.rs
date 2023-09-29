impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        if strs.is_empty() {
            return "".into();
        }

        let min_length = strs.iter().map(|s| s.len()).min().unwrap();
        let mut low = 1;
        let mut high = min_length;

        while low <= high {
            let mid = (low + high) / 2;
            if Solution::is_common_prefix(&strs, mid) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        strs[0][..(low + high) / 2].to_string()
    }

    fn is_common_prefix(strs: &Vec<String>, len: usize) -> bool {
        let str1 = &strs[0][..len];
        for i in 1..strs.len() {
            if !strs[i].starts_with(str1) {
                return false;
            }
        }
        true
    }
}

impl Solution {
    pub fn str_str(haystack: String, needle: String) -> i32 {
        return match haystack.find(&needle) {
            Some(index) => index as i32,
            None => -1
        }
    }
}
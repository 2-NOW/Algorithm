impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        if strs.is_empty() {
            return "".into();
        }
        let prefix = &strs[0]; 
        for i in 0..prefix.len() {
            let c = &prefix[i..=i];
            if strs.iter().any(|s| s.len() <= i || &s[i..=i] != c) {
                return prefix[..i].into();
            }
        }
        prefix.into()
    }
}

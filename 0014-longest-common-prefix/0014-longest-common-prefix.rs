impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        if let Some(min_str) = strs.iter().min_by_key(|s| s.len()) { // Find the shortest string
            return (0..min_str.len()).find(|&i| 
                !strs.iter().all(|string| string.chars().nth(i).unwrap() == min_str.chars().nth(i).unwrap())
            ).map(|i| &min_str[..i])
            .unwrap_or(min_str)
            .to_string();
        }
        "".to_string()
    }
}

impl Solution {
    pub fn is_palindrome(s: String) -> bool {
        let _s = s.chars()
                    .filter(|c| c.is_ascii_alphanumeric())
                    .map(|c| c.to_ascii_lowercase());
        _s.clone().eq(_s.rev())
    }
}
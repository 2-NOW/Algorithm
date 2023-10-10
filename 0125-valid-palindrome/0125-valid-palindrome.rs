impl Solution {
    pub fn is_palindrome(s: String) -> bool {
        if s.is_empty() { return true; }

        let _s: Vec<char> = s.chars()
                    .filter(|c| c.is_ascii_alphanumeric())
                    .map(|c| c.to_ascii_lowercase())
                    .collect();

        if _s.is_empty() { return true; }

        let mut start = 0;
        let mut end = _s.len()-1;

        while start < end {
            let (l, r) = (_s[start], _s[end]);
            if l == r {
                start += 1;
                end -= 1;
            } else {
                return false;
            }
        }
        true
    }
}

// impl Solution {
//     pub fn is_palindrome(s: String) -> bool {
//         let _s = s.chars()
//                     .filter(|c| c.is_ascii_alphanumeric())
//                     .map(|c| c.to_ascii_lowercase());
//         _s.clone().eq(_s.rev())
//     }
// }
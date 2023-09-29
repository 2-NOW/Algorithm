impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        if strs.is_empty() {
            return "".into();
        }

        // 첫번째 단어를 기준
        let prefix = &strs[0];

        // 각 문자를 인덱스로 반복
        for i in 0..prefix.len() {
            let c = &prefix[i..=i];
            if strs.iter().any(|s| s.len() <= i || &s[i..=i] != c) {
                return prefix[..i].into();
            }
        }
        prefix.into()
    }
}

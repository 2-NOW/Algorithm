impl Solution {
    pub fn length_of_last_word(s: String) -> i32 {
        s.split_whitespace()
            .rev()
            .find(|x| !x.is_empty())
            .map(|x| x.len() as i32)
            .unwrap_or(0)
    }
}

// first solution
// impl Solution {
//     pub fn length_of_last_word(s: String) -> i32 {
//         for w in s.split(' ').rev() {
//             if !w.is_empty() {
//                 return w.len() as i32;
//             }
//         }
//         return 0;
//     }
// }
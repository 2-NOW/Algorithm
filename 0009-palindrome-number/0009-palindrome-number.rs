impl Solution {
    pub fn is_palindrome(mut x: i32) -> bool {
        // 음수, 0이 아닌 0으로 끝나는 정수는 false
        if x < 0 || (x % 10 == 0 && x != 0) {
            return false;
        }

        // i32 typed 0
        let mut reversed_x = 0i32;

        while x > reversed_x {
            // x의 마지막 숫자를 reversed_x의 끝에 추가
            reversed_x = reversed_x * 10 + x % 10;
            // x의 마지막 숫자를 제거
            x /= 10;
        }

        // x의 자릿수가 짝수인 경우 || x의 자릿수가 홀수인 경우
        x == reversed_x || x == reversed_x / 10
    }
}

// impl Solution {
//     pub fn is_palindrome(x: i32) -> bool {
//         let mut result = x.to_string();

//         while result.len() >= 2 {
//             let (first, last) = (result.chars().next().unwrap(), result.chars().last().unwrap());

//             if first == last {
//                 result = result[1..result.len() - 1].to_string();
//             } else {
//                 return false
//             }
//         }
//         return true
//     }
// }
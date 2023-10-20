impl Solution {
    pub fn convert_to_title(column_number: i32) -> String {
        let (mut result, mut number) = (String::new(), column_number);

        while number > 0 {
            // A의 숫자 1 뺴기
            number -= 1;
            // ASCII로 변환 (+ A)
            let char_code = ((number % 26) as u8) + b'A';
            // 문자열 앞에 추가하기
            result.insert(0, char_code as char);
            // 다음 자리수로 넘어가기
            number /= 26;
        }

        result
    }
}
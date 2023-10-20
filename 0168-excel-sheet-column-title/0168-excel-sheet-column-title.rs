impl Solution {
    pub fn convert_to_title(column_number: i32) -> String {
        let (mut result, mut number) = (String::new(), column_number);

        while number > 0 {
            number -= 1;
            let char_code = ((number % 26) as u8) + b'A';
            result.insert(0, char_code as char);
            number /= 26;
        }

        result
    }
}
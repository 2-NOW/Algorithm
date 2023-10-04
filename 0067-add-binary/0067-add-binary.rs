impl Solution {
    pub fn add_binary(a: String, b: String) -> String {
    let (a_len, b_len) = (a.len(), b.len());
        let max_len = a_len.max(b_len);
        let mut result = String::new();
        let mut carry = false;
        
        // 왼쪽에 0 채워넣기
        let a = format!("{:0>width$}", a, width=max_len);
        let b = format!("{:0>width$}", b, width=max_len);

        // 최대 길이의 마지막 index 부터
        for i in (0..max_len).rev() {
            let (c1, c2) = (a.as_bytes()[i] as char, b.as_bytes()[i] as char);

            match (c1, c2, carry) {
                ('1', '1', false) | ('1', '0', true) | ('0', '1', true) => {
                    result.push('0');
                    carry = true;
                }
                ('1', '0', false) | ('0', '1', false) | ('0', '0', true) => {
                    result.push('1');
                    carry = false;
                }
                ('0', '0', false) => {
                    result.push('0');
                }
                ('1', '1', true) => {
                    result.push('1');
                }
                _ => unreachable!(),
            }
        }

        // 마지막 carry 계산
        if carry == true { 
            result.push('1'); 
        }

        result.chars().rev().collect()
    }
}
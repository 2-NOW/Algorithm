impl Solution {
    pub fn plus_one(digits: Vec<i32>) -> Vec<i32> {
        // 0..digits.len().rev()으로 마지막 숫자부터 0 index까지 for문
        // 각 인덱스를 돌면서 9면 0으로 변경, 아니면 return +1
        // 다 돌고 return이 안됐으면 1을 더해줌
        let mut result = digits;
        for index in (0..result.len()).rev() {
            if result[index] == 9 {
                result[index] = 0;
            } else {
                result[index] += 1;
                return result;
            }
        }
        result.insert(0, 1);
        return result;
    }
}

impl Solution {
    pub fn my_sqrt(x: i32) -> i32 {
        if x < 2 { return x; }

        // 초기 이진검색의 공간
        let (mut left, mut right) = (0, x);

        // 오른쪽 포인트가 더 클 때까지
        while left < right {
            let mid = (left + right + 1) / 2;

            // mid * mid > x 는 overflow가 생길수도 있어서
            // mid > x / mid
            if mid > x / mid {
                // right를 
                right = mid - 1;
            } else {
                left = mid;
            }
        }

        left
    }
}
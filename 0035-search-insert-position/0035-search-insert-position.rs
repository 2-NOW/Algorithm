impl Solution {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
        let (mut l, mut r) = (0, nums.len());
        while l < r {
            let mid = l + ((r - l) >> 1);
            if nums[mid] < target {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        l as i32
    }
}

// impl Solution {
//     pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
//         match nums.binary_search(&target) {
//             Ok(index) => index as i32,
//             Err(index) => index as i32,
//         }
//     }
// }

// impl Solution {
//     pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
//         let mut l = 0;
//         let mut r = nums.len() as i32 - 1;
        
//         while l <= r {
//             let c = l + (r - l) / 2;
//             if nums[c as usize] == target {
//                 return c;
//             } else if nums[c as usize] < target {
//                 l = c + 1;
//             } else {
//                 r = c - 1;
//             }
//         }

//         return l;
//     }
// }
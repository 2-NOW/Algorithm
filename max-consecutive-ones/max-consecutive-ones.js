/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let count = 0;
  let cur = 0;
  
  for(let i of nums) {
    if(i) {
      cur += 1;
      if(cur > count) count += 1;
    } else {
      cur = 0;
    }
  }
  
  return count;
};
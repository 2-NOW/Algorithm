/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let count = 0;
  let hashmap = new Map();
  

  for(let i=0; i<nums.length; i++) {

    if(!!!hashmap.get(nums[i])) {
      hashmap.set(nums[i], 1)
      count++;
    } else {
      nums[i] = 101;
    }
  }
  nums.sort((a,b)=> a - b)
  return count;
};
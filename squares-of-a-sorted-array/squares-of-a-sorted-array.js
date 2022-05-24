/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const arr = []
  for(let i of nums) {
    arr.push(Math.pow(Math.abs(i),2))
  }
  arr.sort((a, b) => a-b)
  
  return arr
};
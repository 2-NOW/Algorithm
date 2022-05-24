/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  const arrLength = arr.length
  let flag = 1;
  for(let i=0; i < arrLength; i++) {
    if (arr[i] === 0 && flag) {
      arr.splice(i, 0, 0);
      flag = 0;
    } else flag = 1;
  }
  arr.splice(arrLength, arr.length - arrLength);
};
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  // queue에 하나 넣고
  // 그 다음거 넣고
  // 두개 검사하고
  // 아니면 앞에거 하나 뺴고
  let result = 0;
  let queue = []
  let one = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
  let two = {'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900}
  
  s += 'N'
  
  for (let i of s ) {
    queue.push(i)
    if(queue.length === 2) {
      if(two[queue[0] + queue[1]]) {
        result += two[queue[0] + queue[1]]
        queue.shift();
        queue.shift();
      } else {
        result += one[queue[0]]
        queue.shift();
      }
    }
  }
  
  return result;
};
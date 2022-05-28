/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  const stack = [];
  
  for (let i = 0; i < s.length; i++) {
    if(stack[stack.length - 1] === "(" && s.charAt(i) === ")") stack.pop()
    else stack.push(s.charAt(i))
  }
  
  return stack.length;
};
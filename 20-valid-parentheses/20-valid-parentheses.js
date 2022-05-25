/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const brackets = {'(':')', '{':'}', '[':']'};
  const open = ['(', '{', '['];
  const stack = [];
    
  for (let i = 0; i < s.length; i++) {
    if(open.includes(s.charAt(i))) {
      stack.push(brackets[s.charAt(i)])
    } else if (s.charAt(i) !== stack.pop()) return false;
  }
  
  return !!!stack.length ? true : false;
};
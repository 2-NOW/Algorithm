/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  // 앞에서부터, 뒤에서부터 비교하고
  // 다른 문자열이 있으면 그 문자열을 건너뛰고 다시 계산
  // 앞에서 건너뛴거, 뒤에서 건너뛴거 둘 다 계산해서
  // 두개 중 하나라도 true면 true
  // 둘 다 false가 나오면 false
  let r = s.length - 1;
  
  const check = (left, right) => {
    for (let i = left; i < s.length/2; i++) {
      console.log(s[i], s[right])
      if(s[i] !== s[right]) return false;
      right--;
    }
    return true;
  }

  for (let i = 0; i < s.length/2; i++) {
    if(s[i] !== s[r]) return check(i, r-1) || check(i+1, r)
    r--;
  }
  
  return true;
};
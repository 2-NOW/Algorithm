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
  let l = 0;
  let r = s.length - 1;
  const check = (left, right) => {
    console.log(left, right)
    while(left < right) {
      console.log(s[left], s[right])
      if(s[left] !== s[right]) return false;
      left++;
      right--;
    }
    return true;
  }
  console.log(l,r)
  while (l < r) {
    console.log(l, r)
    if(s[l] !== s[r]) return check(l, r-1) || check(l+1, r)
    l++;
    r--;
  }
  
  return true;
};
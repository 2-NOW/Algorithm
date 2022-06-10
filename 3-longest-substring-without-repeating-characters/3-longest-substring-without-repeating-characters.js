/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var length = s.length;
    if (length <= 1) {
        return length;
    }
    var p = 0;
    var q = 1;
    var result = 1;
    while (q < length) {
        var sub = s.slice(p, q);
        var i = sub.indexOf(s[q]);
        if (i !== -1) {
            p = p + i + 1;
        }
        q++;
        result = q - p > result ? q - p : result;
    }
    return result;

//   const map = new Map();
//   let answer = 0;
  
//   if(s.length === 1) return 1;
  
//   for(let i=0; i<s.length; i++) {
//     // 인덱스를 key값으로 넣어서
//     // 그 인덱스 안쪽 값으로 자르고
//     // 또다른 중복 or 마지막 인덱스까지 돌림
    
//     if(map.has(s.charAt(i))) {
      
//     }
    
    
    
//     if(map.get(s.charAt(i)) === 1) {
//       if(map.size > answer) answer = map.size;
//       map.clear();
//       map.set(s.charAt(i), 1);
//     } else map.set(s.charAt(i), 1);
//   }
  
//   if(map.size > answer) answer = map.size;

//   return answer;
};
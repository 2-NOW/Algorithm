/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 투 포인터 해결법
    const length = s.length;
  
    if (length <= 1) return length;
    
    let p = 0;
    let q = 1;
    let result = 1;
    
    // q가 length보다 크거나 같을때까지 돌림
    while (q < length) {
        // sub는 p에서 q까지 자르기
        let sub = s.slice(p, q);
        // i는 sub에서 q의 인덱스
        let i = sub.indexOf(s[q]);
        // i 가 있으면 -> q가 있으면
        // p는 i번째 + 1
        if (i !== -1) p += i + 1;
      
        // q를 하나 올림
        q++;
        
        // q - p가 result 보다 크면 result는 q - p
        // q - p가 더 작으면 result 그대로
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
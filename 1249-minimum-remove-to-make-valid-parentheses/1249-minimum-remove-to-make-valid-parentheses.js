/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
//   let open = 0;
  
//   // s에 ( 가 있으면 더 지나가면 )가 있어야함.
//   // minimum으로
//   // 먼저 닫힌 괄호 있으면 바로 없앰
//   // 열린괄호면 진행 -> 쭉 열린괄호가 있어야됨
//   // 쭉 열리다가 닫히면 그때부턴 닫힌괄호가 나와야됨
//   // 열린괄호 수만큼 닫힌괄호가 생기면 그 후로는 괄호가 없어야됨
  
//   for (let i = 0; i < s.length; i++) {
//     if(s.charAt(i) === '(') open++;
//     else if(s.charAt(i) === ')') open--
    
//     if(open < 0) {
//       s = s.substring(0, i) + s.substring(i + 1);
//       open++;
//       i--;
//     }
//   }
  
//   let close = 0;
//   // 괄호가 열려있는채로 끝났다 ?
//   // 그럼 뒤에서 한번 더 계산
//   if(open > 0) {
//     for (let j = s.length - 1; j >= 0; j--) {
//       if(s.charAt(j) === '(') close--;
//       else if(s.charAt(j) === ')') close++;
//       if(close < 0) {
//         s = s.substring(0, j) + s.substring(j + 1)
//         close++;
//       }
//     }
//   }

//   return s;
  
  const arr = s.split('');
  const stack = [];
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === '(') stack.push(i);
    else if(arr[i] === ')') {
      if(stack.length) stack.pop();
      else arr[i] = "";
    }
  }
  
  for (let n of stack) arr[n] = "";
  
  return arr.join("")
};
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let start = 0;
  let total = 0;
  let current = 0;
  
  // 각 station에서 나오는 current의 값들은 다 같으므로
  // 모든 station을 돌면서 current 값들을 계산한다.
  // 그리고 total에 누적시킨 후
  // 최종 current값과 total을 더해서 0 이상일 때는 가스비가 남는것이므로 start를 반환
  // 0보다 작으면 다 돌 수 없으므로 -1 반환
  
  for(let i = 0; i < gas.length; i++) {
    current += gas[i] - cost[i]
    
    if(current < 0) {
      start = i + 1;
      total += current;
      current = 0;
    }
  }
  
  return total + current >= 0 ? start : -1;
    
//     if(gas[i] >= cost[i]) {
//       let tank = gas[i];
//       let station = i;
//       let count = 0;
      
//       for(let j = 0; j < gas.length; j++) {        
//         tank -= cost[station];
        
//         if(tank >= 0) {
//           station = (station + 1) % gas.length;
//           tank += gas[station];
//           count++;
//         }
//       }
      
//       if(count === gas.length) return i;
//     }
//   }
  
//   return -1;
};
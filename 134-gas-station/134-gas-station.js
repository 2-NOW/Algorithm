/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let start = 0;
  let total = 0;
  let current = 0;
  
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
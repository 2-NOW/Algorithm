/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function(startValue, target) {
  let count = 0;
  
  while (target > startValue) {
    if(target % 2 === 0) target /= 2;
    else target++;
    count++;
  }
  
  // 나누기 2를 했을 때 target이 startValue 보다 작아지면
  // 그만큼은 어차피 더하기 step을 밟아야 하므로
  // startValue - target >= 0 의 값이 나온다.
  return count += startValue - target;
};
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // 정렬 먼저
  intervals.sort((a, b) => a[0] - b[0]);
  
  // 합치기를 하려면 제일 요소의 뒷 부분이 다른 요소의 앞부분보다 크거나 같은지를 보면 된다.
  for (let i=0; i< intervals.length-1; i++) {
    if(intervals[i][1] >= intervals[i+1][0]) {
      let end = intervals[i][1] >= intervals[i+1][1] ? intervals[i][1] : intervals[i+1][1];
      intervals.splice(i, 2, [intervals[i][0], end]);
      i--;
    }
  }
  return intervals
};
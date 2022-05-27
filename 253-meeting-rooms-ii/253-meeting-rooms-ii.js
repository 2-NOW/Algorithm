/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  const starts = intervals.slice().sort((a, b) => a[0] - b[0]);
  const ends = intervals.slice().sort((a, b) => a[1] - b[1]);
  
  let room = 0;
  let end = 0;
  
  for (let i = 0; i < intervals.length; i++) {
    starts[i][0] < ends[end][1] ? room++ : end++
  }
  
  return room;
  
//   // 앞 숫자로 정렬
//   // 제일 앞쪽 배열에 방 하나를 할당
  
//   // gap을 다 조사해서 양수면 그 차이가 가장 작은 index의 방에 할당
//   // 음수면 새로운 방을 할당
  
//   // 끝 숫자보다 크면 차이가 가장 적은 방에 할당
//   intervals.sort((a, b) => a[0] - b[0]);
  
//   const rooms = [[...intervals[0]]]
  
//   // gap을 조사해서 
//   for (let i = 1; i < intervals.length; i++) {
//     let gap = [-1, 0];
//     for (let j = 0; j < rooms.length; j++) {  
//       let temp = intervals[i][0] - rooms[j][rooms[j].length - 1];
//       if(temp >= 0 && (gap[0] === -1 || gap[0] > temp)) gap = [temp, j]
//     }
//     if (gap[0] >= 0) rooms[gap[1]] = [...rooms[gap[1]], ...intervals[i]];
//     else if (gap[0] === -1) rooms.push([...intervals[i]]);
//   }
  
//   return rooms.length;
};
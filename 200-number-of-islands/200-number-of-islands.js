/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  // 0,0부터 시작해서 전체를 탐색한다.
  // 1이 있으면 count + 1
  // 탐색한 값은 0으로 바꾼다
  // 사방이 0이되면 return한다.
  let count = 0;
  let curRow = 0;
  let curCol = 0;
  const stack = [[0, 0]];
  
  function recursive(grid, row, col) {
    grid[row][col] = '0';
    
    if(row + 1 < grid.length && grid[row + 1][col] === '1') recursive(grid, row + 1, col);
    if(col + 1 < grid[0].length && grid[row][col + 1] === '1') recursive(grid, row, col + 1);
    if(row - 1 >= 0 && grid[row - 1][col] === '1') recursive(grid, row - 1, col);
    if(col - 1 >= 0 && grid[row][col - 1] === '1') recursive(grid, row, col - 1);
  }
  
  for(let row = 0; row < grid.length; row++) {
    for(let col = 0; col < grid[0].length; col++) {
      if(grid[row][col] === '1') {
        recursive(grid, row, col);
        count += 1;
      }
    }
  }
  
  return count;
  // while문은 stack에 넣었다 뺐다 하는 시간이 들어가서
  // 이중for문이 더 나은 런타임을 갖는다.
//   while(stack.length !== 0) {
//     const cur = stack.pop();
//     if(grid[cur[0]][cur[1]] === "1") {
//       recursive(grid, cur[0], cur[1])
//       count += 1;
//     }
//     if(curRow < grid.length - 1) curRow += 1
//     else if(curCol < grid[0].length - 1) {
//       curRow = 0;
//       curCol += 1;
//     }
    
//     if(cur[0] !== curRow || cur[1] !== curCol) stack.push([curRow, curCol]);
//   }
  
//   return count;
  
    // 재귀로하면 스택에 너무 많이 쌓일 것 같다.
  // function recursive0(grid, a, b) {
  //   if(grid[a][b] === 0) {
  //     if(grid[a+1][b] !== undefined) recursive0(grid, a+1, b);
  //     if(grid[a][b+1] !== undefined) recursive0(grid, a, b+1);
  //   }
  //   if(grid[a][b] === 1) recursive
  // }
};
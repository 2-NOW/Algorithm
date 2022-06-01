/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
  if(!root) return [];

  let map = [];
  
  function recursive(node, row, col) {
    if(!node) return;
    
    // map에 col번째가 없으면 map에 col번째는 [[root.val, row]]
    // 새로운거 넣음
    // 있으면 map[col]에 [root.val, row] push
    if (!map[col]) map[col] = [[node.val, row]];
		else map[col].push([node.val, row]);

    // node의 왼쪽자식이 있으면 재귀로 왼쪽 node 넣고 row + 1, col - 1
    // 행은 내려가고 열은 왼쪽이니까 - 1
    // node의 오른쪽자식이 있으면 재귀로 오른쪽 node 넣고 row + 1, col + 1
    // 행은 내려가고 열은 오른쪽이니까 + 1
    if (node.left) recursive(node.left, row + 1, col - 1);
		if (node.right) recursive(node.right, row + 1, col + 1);
  }
  // node의 범위가 0에서 100까지 이므로
  // col에 100을 넣어버림 - 음수가 안나오게
  recursive(root, 0, 100);
  console.log(map)
  
  // col 값으로 정렬해서 뒤 순서의 col은 뒤로 보냄
  // col이 없으면 ? 0으로 - 이건 안해도 되는거 아닌가 ?
	const result = map.filter(col => (col ? col.sort((a, b) => a[1] - b[1]) : 0));
  console.log(result)
  
  // output
  // 빈 배열을 시작으로
  // 배열 안에 배열의 값들을 reduce를 돌면서
  // 배열 안에 0번째 요소 (value) 들을 빈 배열과 합쳐서
  // new row를 만들고
  // 그걸 acc에 push한다.
	const output = result.reduce((acc, cv) => {
		const newRow = cv.reduce((acc1, row) => acc1.concat(row[0]), []);

		acc.push(newRow);
    console.log(1, acc)
    console.log(2, newRow)
		return acc;
	}, []);

	return output;

  
//   왼쪽 가장 끝 노드가 0번
//   하나씩 왼쪽으로 내려갈때마다 unshift
//   오른쪽으로 내려가면 push
  
//   왼쪽에 요소가 있으면 있는 곳에 push
//   오른쪽에 요소가 있으면 있는 곳에 push

//   col, row의 개념이 같이 들어감
  
//     function recursive(arr, node, index = 0) {  
//     if(node.left) {
//       // 현재 노드의 왼쪽에 요소가 있으면
//       if(!!arr[index - 1]) {
//         arr[index - 1].push(node.left.val);
//         console.log(1, node.val, index)
//         console.log(arr)
//         recursive(arr, node.left, index - 1);
//       } else {
//         // 왼쪽에 요소가 없으면
//         arr.unshift([node.left.val]);
//         console.log(2, node.val, index)
//         console.log(arr)
//         recursive(arr, node.left);
//         index++;
//       }
//     }

//     if(node.right) {
//       // 현재 노드에 오른쪽에 요소가 있으면
//       if(!!arr[index + 1]) {
//         arr[index + 1].push(node.right.val);
//         console.log(3, node.val, index)
//         console.log(arr)
//         recursive(arr, node.right, index + 1);
//       } else {
//         // 오른쪽에 요소가 없으면
//         arr.push([node.right.val]);
//         console.log(4, node.val, index)
//         console.log(arr)
//         recursive(arr, node.right, arr.length - 1);
//       }
//     }
//   }
  
//   recursive(answer, root);
  
//   return answer;
};
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high, sum = 0) {
  // 함수 자체를 재귀로
  // 없는 노드가 들어왔을때 (right 혹은 left가 없을 때) 바로 sum을 return 해줌 (기본값 0)
  if(!root) return sum;
  
  if(high >= root.val && root.val >= low) sum += root.val;
  
  // leaf node에서는 root.left, root.right의 value가 없으므로 0값으로 return 됨.
  return sum + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
  
//   let answer = 0;
  
//   // 재귀풀이
//   // 한 단위로 나눠서 생각하기
//   // 노드 도착하면 해야하는것
//   // value 확인
//   // left 있으면 left 들어가기
//   // right 있으면 right 들어가기
//   // 둘 다 없으면 return
//   const recursive = (node, low, high) => {
//     if(high >= node.val && node.val >= low) answer += node.val;

//     if(node.left) recursive(node.left, low, high);
//     if(node.right) recursive(node.right, low, high);
//     return;
//   }
  
//   recursive(root, low, high);
  
//   return answer;
  
  // 스택풀이
//   const visited = [];
//   const stack = [root];
//   let answer = 0;
  
//   while(stack.length !== 0) {
//     const node = stack.pop();
//     if(high >= node.val && node.val >= low) answer += node.val;

//     if(!visited.includes(node.val)) {
//       if(node.right) stack.push(node.right);
//       if(node.left) stack.push(node.left);
//       visited.push(node.val);
//     }
//   }
    
//   return answer;
};
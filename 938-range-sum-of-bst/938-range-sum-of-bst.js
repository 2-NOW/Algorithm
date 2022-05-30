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
var rangeSumBST = function(root, low, high) {
  const visited = [];
  const stack = [root];
  let answer = 0;
  
  while(stack.length !== 0) {
    const node = stack.pop();
    if(high >= node.val && node.val >= low) answer += node.val;

    if(!visited.includes(node.val)) {
      if(node.right) stack.push(node.right);
      if(node.left) stack.push(node.left);
      visited.push(node.val);
    }
  }
  
  return answer;
};